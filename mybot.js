const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

class Person {
  constructor(id) {
    this.id = id;
  }

  get identity(){
    return this.id;
  }


}

function ZapBot(){

   client.on("message", (message) => {

    const helpText = "What? Here is some help. Try: \n \n !roll = You get rick rolled. \n \n !congrats = a unique and beautiful flavor of praise and adulation \n \n !hubba = a menu to Connor's heart \n \n !canyouhearme = some sensual talk from ZapBot";

    if (message.content.startsWith("/zaphelp")) {
         message.channel.send(helpText);
      }

    else if (message.content.startsWith("!roll")){
      message.channel.send({embed: { 
          title: "The greatest video ever compliments of ZapBot",
          url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
          image: {
            url: "https://www.dailydot.com/wp-content/uploads/916/c5/decb873e864d4d61bca469563398e52b.jpg"
          }
        }
      });
    }

    else if (message.content.startsWith("!congrats")){
      message.channel.send({embed: { 
          title: "You sir, are a scholar and a gentleman",
          image: {
            url: "https://im-01.gifer.com/5Sb.gif"
          }
        }
      });   
    }

     else if (message.content.startsWith("!hubba")){
      message.channel.send({embed: { 
          title: "A menu to the heart of Hubba, a terrifying place to go",
          url: "https://www.dairyqueen.com/us-en/Menu/Treats/?localechange=1&",
          image: {
            url: "https://i.imgur.com/cHp4ZvN.png"
          }
        }
      });   
    }

     else if (message.content.startsWith("!canyouhearme")){
      message.channel.send("Yes, pretty baby, I can hear you! Can you hear me?", {
        tts: true
      });   
    }
    /* end client on */
  });
}

ZapBot();

function ZappyRules(iden){

  const Zappy = new Person(iden);

    client.on("message", (message) => {

      if (message.author.id == Zappy.identity) {
        
        message.channel.send("That guy sure is the best!");

      }
    });

}

ZappyRules(284916794093731860);

/* end rules */


function CoolkidbearRules(iden){

  const Coolkidbear = new Person(iden);

    client.on("message", (message) => {

      if (message.author.id == Coolkidbear.identity ) {
        
        message.channel.send("I'm being focused! Stop that!");

      }
    });

}

CoolkidbearRules(345414048952877058);

/* end rules */



client.login("NDEyODMwOTU3MTk3MDY2MjU0.DWQVTw.VfFT1CxqDrrWRN-CyyvYBR-syJY");

