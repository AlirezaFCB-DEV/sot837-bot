# SOT837 Bot

A Backend for a chat bot and this document describe how to use the backend.

---

## Requirements

- Python 3.10 or higher
- pip

---

## Installation

### 1. Clone project
```bash
git clone https://github.com/AlirezaFCB-DEV/sot837-bot.git
cd sot837-bot
```

---

### 2.Crate virtual environment and activate

#### Widows
```bash 
python -m venv venv
venv\Scripts\activate
```

#### Linux/Mac
```bash
python3 -m venv venv
source venv/bin/activate
```
#### PowerShell
```powershell
venv\Scripts\Activate.ps1
```

---

### 3.Installing dependencies
```bash 
pip install django djangorestframework
```

---

## Run project

### Run Server 

#### Windows
```bash 
python ./manage.py runserver
```

#### Linux/Mac
```bash 
python3 ./manage.py runserver
```

---

### Use API
The API is available at the URL below.

```bash 
http://127.0.0.1:8000
```
---

### Admin panel

```bash 
http://127.0.0.1:8000/admin
```

**Note :** : for Use Admin panel at first create a super user with command below then use that.

```bash 
python3 ./manage.py createsuperuser
```

---

## API

| Method | Address | Details |
| ------ | ------- | ------- |
| GET    | /api/messages/ | Get all messages list|
| POST   | /api/messages/ | Create a new message |
| PUT    | /api/messages/[id]/ | Update a message |
| PATCH  | /api/messages/[id]/ | Update a message |
| DELETE | /api/messages/[id]/ | Delete a message |


### Message Model(POST)

```Json
{
    "type" : "user" | "bot",
    "content" : "string"
}

