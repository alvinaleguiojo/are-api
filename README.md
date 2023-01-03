
# ARE API

This API ENDPOINT is use for internal projects with Jundave Wamar. 


## Features

- GET ALL CONTACTS
- ADD NEW CONTACT

## API Reference
 #BaseURL - https://are-api.vercel.app/

#### Add New Contact

```http
  POST /api/contacts/add_contact
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Formname` | `string` | **Required**. |
| `Fullname` | `string` | **Required**. |
| `Number` | `string` | **Required**. As phone number |
| `Email` | `string` | **Required**. |
| `Message` | `string` | **Required**. |

#### Get All Contacts

```http
  GET /api/contacts
```




