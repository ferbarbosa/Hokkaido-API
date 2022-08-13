
<div id="top"></div>

<!-- README Template by: https://github.com/othneildrew/Best-README-Template/blob/master/README.md -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="">
    <img src="https://i.imgur.com/EmSNpNO.png" alt="Logo">
  </a>

  <h3 align="center">HOKKAIDO API</h3>

  <p align="center">
    This is a clothing store api
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
       <a href="#usage">Usage</a>
      <ul>
	       <li><a href="#create-user">Create user</a></li>
	       <li><a href="#auth-user">Auth user</a></li>
	       <li><a href="#create-item">Create Item</a></li>
	       <li><a href="#get-item-by-tag">Get item by tag</a></li>
	       <li><a href="#get-item-by-id">Get item by id</a></li>
	</ul>
    </li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a API made for the HOKKAIDO STORE project.

What do it have:
* Create user.
* Auth user.
* Create a new item.
* Get all items.
* Get a single item by id.

<p align="right">(<a href="#top">back to top</a>)</p>



## Built With

Here are what i've used in this project.

* [TypeScript](https://www.typescriptlang.org)
* [Node.js](https://nodejs.org/en/)
* [Express](https://www.npmjs.com/package/express)
* [MongoDB](https://www.mongodb.com)
* [Mongoose](https://www.npmjs.com/package/mongoose)
* [Lodash](https://www.npmjs.com/package/lodash)
* [BCrypt](https://www.npmjs.com/package/bcrypt)

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

### Create User
<p>To use the create method just do a post to</p>

```http
POST /adduser
```
<p>The body must look something like this<p>

```typescript
{
  "username": string,
  "email": string,
  "password": string
}
```


### Auth user
After creating a new user you can authenticate with


```http
POST /auth
```
The body is simple

```typescript
{
  "email": string,
  "password": string
}
```

if succefully authenticate, the response will be the user information


### Create Item
To use the create of item method just do a post to

```http
POST /additem
```
<p>With this atributes<p>

```typescript
{
  "title": string,
  "color": Array<string>,
  "size": Array<String>,
  "price": string,
  "tag": Array<string>,
  "orders": number,
  "img": Array<string>,
  "description": string
}
```
### Get item by tag

To request this you need to pass at least one `tag` (multiples are separated by coma), you can pass a `limit` of results too (default is 10).

```http
GET /catalog?tag=<tag>&limit=<limit>
```
There is some other query strings that you can use
|`string`| values|
|--|--|
|`orderBy` | 0 or 1 |
|`sort` | createdAt / orders |
|`size` | string |

It will return something like that

```json
{
	"_id": "a lot of numbers and letters",
	"title": "Jeans jacket",
	"color": [
		"Blue"
	],
	"size": [
		"P",
		"G",
		"GG",
		"XG"
	],
	"price": "119.99",
	"img": [
		"some image url"
	],
	"description": "Description here",
	"tag": [
		"male",
		"female",
		"blue",
		"jeans"
	],
	"orders": number,
	"itemId": "random letters and numbers",
	"createdAt": timestamp,
	"updatedAt": timestamp,
	}
```

### Get item by id

To get a item by id you just need to pass the `itemId` as a param

```http
GET /items/:itemId
```
The response will be the item information

<p align="right">(<a href="#top">back to top</a>)</p>


