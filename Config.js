{
  "name": "VAJIRA-MD",
  "description": "VAJIRA-MD has been designed to make things easier and fun while using WhatsApp. 👨‍💻",
  "logo": "https://telegra.ph/file/235d945df230d71f246b6.jpg",
  "keywords": ["vajiramd", "bot", "whatsapp bot", "multi device", "vajira-md"],
  "success_url": "/",

  "env": {
    "SESSION_ID": {
            "description": "Type the Session-ID you got from scaning QR",
            "required": true,
            "value": "VAJIRA-MD=WccyDR4T#yRljJhkMW9BVHEUKVPWhXhcdolKfrfPY3y5btZG7Pxk"
        },
    "COMMAND_TYPE": {
            "description": "Put here (button or nonbutton) to change bot command mode",
            "required": true,
            "value": "button"
        },
    "OWNER_NUMBER": {
            "description": "Put here your number without +",
            "required": true,
            "value": "25417646309"
        },
    "POSTGRESQL_URL": {
            "description": "Put here postgresql url",
            "required": false,
            "value": "postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech"
        } 
    },
    "buildpacks": [
        {
            "url": "https://github.com/heroku/heroku-buildpack-nodejs.git"
        }
     ],
  "stack": "heroku-24"
}
