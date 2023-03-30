# Blogger API
An API to get posts and tags from any blogger blog.

## Table of Contents

- [Get All Label](#all-label)
- [Get Spesific Label](#spesific-label)
- [Get All Pages](#all-pages)
- [Get Spesific Pages](#spesific-pages)
- [Get All Posts](#all-posts)
- [Get Spesific Posts](#spesific-posts)

## All Label

- Endpoint: /label

| Query         | Type             | Default | Description |
| ------------- |:----------------:| :------:| - |
| blogid        | number           | -       | - |
| order         | enum (asc, desc) | asc     | - |
| limit         | number           | 5       | - |
| pages         | number           | 1       | - |

## Spesific Label

- Endpoint: /label/:id

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blogid        | number                    | -         | - |
| order         | enum (published, updated) | published | - |
| limit         | number                    | 5         | - |
| pages         | number                    | 1         | - |
| updated_min   | date iso 8601             | null      | - |
| updated_max   | date iso 8601             | null      | - |
| published_min | date iso 8601             | null      | - |
| published_max | date iso 8601             | null      | - |

## All Pages

- Endpoint: /pages

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blogid        | number                    | -         | - |
| order         | enum (published, updated) | published | - |
| limit         | number                    | 5         | - |
| pages         | number                    | 1         | - |
| updated_min   | date iso 8601             | null      | - |
| updated_max   | date iso 8601             | null      | - |
| published_min | date iso 8601             | null      | - |
| published_max | date iso 8601             | null      | - |

## Spesific Pages

- Endpoint: /pages/:id

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blogid        | number                    | -         | - |
| isjson        | boolean                   | false     | - |

## All Posts

- Endpoint: /posts

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blogid        | number                    | -         | - |
| order         | enum (published, updated) | published | - |
| limit         | number                    | 5         | - |
| pages         | number                    | 1         | - |
| updated_min   | date iso 8601             | null      | - |
| updated_max   | date iso 8601             | null      | - |
| published_min | date iso 8601             | null      | - |
| published_max | date iso 8601             | null      | - |

## Spesific Posts

- Endpoint: /posts/:id

| Query         | Type                      | Default   | Description |
| ------------- |:-------------------------:| :--------:| - |
| blogid        | number                    | -         | - |
| isjson        | boolean                   | false     | - |
