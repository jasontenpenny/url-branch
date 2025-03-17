# url-branch
This repository contains an open-source link aggregator, similar to Linktree. It uses [Eleventy](https://11ty.dev) as a static web generator and can be run on any platform that has a node backend. It supports both dark and light modes out of the box.

![image showing what a profile might look like](/assets/images/sample.png)

# Install

Clone the repository and then install Eleventy in the folder.

```
npm install @11ty/eleventy
```

# Adding your data

You should only need to modify 2 files, both of which live in the _data folder.

## Modify profile.json

The `profile.json` file is where your name, description, and avatar are stored. The _name_ entry is the only one that's really required. If you don't want a description or avatar, remove those lines. A default avatar will be shown if no avatar is provided. The _siteName_ field populates the tab name in your browser. If not defined, it will display "\[name\]'s links" (i.e. John Doe's Links).

Your avatar photo should be stored under `/assets/images`.

Example data:
```json
{
    "siteName": "John Doe's Links",
    "name": "John Doe",
    "avatar": "/assets/images/avatar.jpg",
    "description": "Web guru, internet person of interest"
}
```

## Modify links.json

The `links.json` file is where each link is defined. You can define as many as you'd like, but each one will at least need a _description_ and _url_. The icons are sourced from [Fontawesome's](https://fontawesome.com/search?ic=free) free icons. If you want to use a brand icon (i.e. Bluesky), you need to specify both the _icon_ and the _category_. If the icon is one of the classic ones, then only specify the _icon_. If you don't want an icon, don't include either the _category_ or _icon_ items. (see examples below).

You can optionally define a _subtitle_ if you want to include more detail about the link. An example use case might be to differentiate between a podcast link for Spotify and Apple Music.

```json
{
    {
        "category": "brand",
        "icon": "bluesky",
        "description": "Bluesky",
        "url": "https://bsky.app/profile/myprofile.bsky.social"
    },
    {
        "icon": "link",
        "description": "My Website",
        "url": "https://www.myblog.com"
    },
    {
        "icon": "podcast",
        "description": "My Podcast",
        "url": "https://spotify.com/mypodcast",
        "subtitle": "Listen on Spotify"
    },
    {
        "description": "Random site",
        "url": "https://www.google.com"
    }
}
```
