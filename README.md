# Jobs-Tracking
APIs made for tracking job applications using NodeJS, Express, Mongoose and JWT has been used for authentication.

---
## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environment.

### Node

You can install nodejs and npm easily with apt install, just run the following commands.

```sh
> sudo apt install nodejs
> sudo apt install npm
```

If the installation is successful, you can run the following command.
```sh
> node --version
v16.20.2

> npm --version
8.19.4
```

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, open the command line again and be happy.
```sh
> npm install npm -g
```
---

## Installation

```sh
> git clone https://github.com/kaustubh0201/Jobs-Tracking.git
> cd Jobs-Tracking
> npm install
```

## Configure app

Create `.env` then add MongoDB URI in it. You will need to make a cluster on MongoDB Atlas or start the MongoDB server locally.
Also put the JWT_SECRET and JWT_LIFETIME in this file.

## Running the project
```sh
> npm start
```

---

## Database

---

* **User Schema**

```sh 
{
   name: {
       type: String,
       required: [true, 'Please provide the name!'],
       minlength: 3,
       maxlength: 50
   },

   email: {
       type: String,
       required: [true, 'Please provide the email!'],
       match: [
           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
           'Please provide valid email'
       ],
       unique: true
   },

   password: {
       type: String,
       required: [true, 'Please provide the password!'],
       minlength: 6
   }
}
```

---

* **Job Schema**
```sh 
{
    company: {
        type: String,
        required: [true, 'Please provide company name!'],
        maxlength: 50
    },

    position: {
        type: String,
        required: [true, 'Please provide position!'],
        maxlength: 100
    },

    status: {
        type: String,
        enum: ['interview', 'declined', 'pending'],
        default: 'pending'
    },

    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide the user!']
    }
}, {
    timestamps: true
}
```

---
