"""
Instagram profile photo downloader.
Requires: pip install instaloader
Works with public profiles or your own authenticated account.
"""

import re
import sys
from pathlib import Path
import instaloader


def extract_username(url_or_username: str) -> str:
    """Parse a username from a profile URL or return it as-is."""
    url_or_username = url_or_username.strip().rstrip("/")
    match = re.search(r"instagram\.com/([^/?#]+)", url_or_username)
    if match:
        return match.group(1)
    return url_or_username


def download_profile_photos(
    profile_url: str,
    output_dir: str = ".",
    username: str | None = None,
    password: str | None = None,
    max_posts: int | None = None,
) -> list[Path]:
    """
    Download all photos from an Instagram profile.

    Args:
        profile_url: Full Instagram profile URL or just the username.
        output_dir: Directory to save photos. A subdirectory named after
                    the profile will be created inside it.
        username: Your Instagram username for authentication (optional,
                  required for private profiles or to avoid rate limits).
        password: Your Instagram password (optional).
        max_posts: Cap on number of posts to download. None = all posts.

    Returns:
        List of paths to downloaded files.
    """
    target = extract_username(profile_url)
    if not target:
        raise ValueError(f"Could not parse a username from: {profile_url!r}")

    loader = instaloader.Instaloader(
        dirname_pattern=str(Path(output_dir) / "{target}"),
        filename_pattern="{date_utc:%Y-%m-%d_%H-%M-%S}_{shortcode}",
        download_videos=False,
        download_video_thumbnails=False,
        download_geotags=False,
        download_comments=False,
        save_metadata=False,
        post_metadata_txt_pattern="",
        quiet=False,
    )

    if username and password:
        print(f"Logging in as {username}...")
        loader.login(username, password)

    print(f"Fetching profile: {target}")
    profile = instaloader.Profile.from_username(loader.context, target)

    posts = profile.get_posts()
    downloaded: list[Path] = []
    count = 0

    for post in posts:
        if max_posts is not None and count >= max_posts:
            break
        try:
            loader.download_post(post, target=target)
            # Collect image files written for this post
            dest_dir = Path(output_dir) / target
            pattern = f"{post.date_utc:%Y-%m-%d_%H-%M-%S}_{post.shortcode}"
            downloaded.extend(dest_dir.glob(f"{pattern}*.jpg"))
            count += 1
            print(f"  [{count}] {post.shortcode}")
        except instaloader.exceptions.InstaloaderException as exc:
            print(f"  Skipping {post.shortcode}: {exc}", file=sys.stderr)

    print(f"\nDone. {count} post(s) downloaded to: {Path(output_dir) / target}")
    return downloaded


if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(
        description="Download all photos from an Instagram profile."
    )
    parser.add_argument("profile", help="Instagram profile URL or username")
    parser.add_argument(
        "-o", "--output", default=".", help="Output directory (default: current dir)"
    )
    parser.add_argument("-u", "--user", help="Your Instagram username (for login)")
    parser.add_argument("-p", "--password", help="Your Instagram password (for login)")
    parser.add_argument(
        "-n", "--max-posts", type=int, default=None, help="Maximum number of posts"
    )
    args = parser.parse_args()

    files = download_profile_photos(
        profile_url=args.profile,
        output_dir=args.output,
        username=args.user,
        password=args.password,
        max_posts=args.max_posts,
    )
    print(f"\n{len(files)} image file(s) saved.")
