const { Events, GuildMemberManager, PermissionsBitField } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        let messageContent = message.content.toLowerCase();

        if (message.channel.id == '1129073802433802301' && message.attachments.size >= 1) {
            await message.reply("<:01_cum:1129473272661160016>");
        }

        if (message.mentions.members.first()) {
            message.mentions.members.forEach(member => {
                console.log(member.user.id);
            })
        }

        if (messageContent.split(" ").includes("l") || messageContent.split(" ").includes("issue")) {
            if (messageContent.split(" ").includes("amd") || messageContent.split(" ").includes("nvidia") || messageContent.split(" ").includes("intel")) {
                message.member.timeout(60 * 1000, 'No Hardware Debates!')
                    .then(() => message.reply('No Hardware Debates! (Contact <@539322589391093780> if this was a false trigger)'))
                    .catch(console.error);
                let username = message.member.nickname || "";
                message.member.setNickname("Retard Tech Tips").catch(console.log);
                setTimeout(() => {
                    message.member.setNickname(username).catch(console.log);
                }, 60 * 1000);
            }
        }

        if (message.channel.id != '1129083072667726015' && message.channel.id != '1129073742614646804' && message.channel.id != '1129073802433802301') return;

        if (message.mentions.users.first()) {
            if (message.mentions.users.first().id == '1128741376390082610' && message.author.id == '1128425774349824103' && Math.floor(Math.random() * 100) >= 70) {
                message.reply("What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little \"clever\" comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.");
            }
        }

        if (message.author.id == '1128741376390082610' || message.author.id == '1128425774349824103') return;

        const keywords = new Map([
            ["gay", "<@1047896499402584155> is gay"],
            ["brap", "<@168486008990597120>"],
            ["indeed", "<@522110311805878282>"],
            ["retard", "everyone @here is a retard"],
            ["everyone", "@here"],
            ["meth", "<@868802108252626965>"],
            ["nigger", "<@661269920637517882> you fucking nigger"],
            ["nigga"," <@661269920637517882> you fucking nigger"],
            ["black people", "<@661269920637517882> you fucking nigger"],
            ["cotton picker", "<@661269920637517882> you fucking nigger"],
            ["cunt", "<@661269920637517882> ya cunt"],
            ["master", "<@539322589391093780>"],
            ["slave", "<@168486008990597120>"],
            ["cum", "https://cdn.discordapp.com/attachments/794975038616895488/1143272944139771944/RDT_20230821_225612481449588297125786.png"],
            ["bot", "> Bot\n\nI'm not a bot i'm your dad"],
            ["motherfucker", "> Motherfucker\n\nI'll fuck your mother"],
            ["roll", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
            ["ukraine", "<@1047896499402584155> you bastard"],
            ["nut", "https://tenor.com/view/nut-nut-nut-nutella-nut-button-nut-button-gif-23680452"],
            ["bust", "https://tenor.com/view/ambatukam-ambasing-ambadeblow-gif-25400729"],
            ["barbie", '"Hiya, Barbie!" "Hi, Ken!" "You wanna go for a ride?" "Sure, Ken!" "Jump in!" I\'m a Barbie girl in a Barbie world Life in plastic, it\'s fantastic You can brush my hair, undress me everywhere Imagination, life is your creation Come on Barbie, let\'s go party I\'m a Barbie girl in a Barbie world Life in plastic, it\'s fantastic You can brush my hair, undress me everywhere Imagination, life is your creation I\'m a blonde bimbo girl in a fantasy world Dress me up, make it tight, I\'m your dolly You\'re my doll, rock and roll, feel the glamour in pink Kiss me here, touch me there, hanky-panky You can touch, you can play If you say, "I\'m always yours" Ooh-whoa-ooh I\'m a Barbie girl in a Barbie world Life in plastic, it\'s fantastic You can brush my hair, undress me everywhere Imagination, life is your creation Come on Barbie, let\'s go party Ah-ah-ah, yeah Come on Barbie, let\'s go party Ooh-whoa-ooh, ooh-whoa-ooh Come on Barbie, let\'s go party Ah-ah-ah, yeah Come on Barbie, let\'s go party Ooh-whoa-ooh, ooh-whoa-ooh Make me walk, make me talk, do whatever you please I can act like a star, I can beg on my knees Come jump in, bimbo friend, let us do it again Hit the town, fool around, let\'s go party You can touch, you can play If you say, "I\'m always yours" You can touch, you can play If you say, "I\'m always yours" Come on Barbie, let\'s go party Ah-ah-ah, yeah Come on Barbie, let\'s go party Ooh-whoa-ooh, ooh-whoa-ooh Come on Barbie, let\'s go party Ah-ah-ah, yeah Come on Barbie, let\'s go party Ooh-whoa-ooh, ooh-whoa-ooh I\'m a Barbie girl in a Barbie world Life in plastic, it\'s fantastic You can brush my hair, undress me everywhere Imagination, life is your creation Oh, I\'m having so much fun! Well Barbie, we\'re just getting started Oh, I love you, Ken!'],
            ["querdenker", "milfenberger"],
            ["gym", "Gym?, Nah thats for idiots"],
            ["umbreon", "Hey, did you know that in terms of male human and female pokemon breeding, vaporeon is not the most compatible pokemon for humans? This is a common and understandable misconception, however vaporeon has its human on pokemon breedability outclassed by it's cousin evolution, umbreon. Umbreon boasts an extremely impressive defense stat spread. With it's combination of very high HP, defense and special defense stats, it can take a great pounding and come back for more! It's ability, inner focus allows it to keep slamming attentively, without getting fatigued. Umbreon also has access to the ability synchronise, which allows it to share it's current status with you, meaning you will receive all of the pleasure it feels combined with all the pleasure you're getting from pounding this perfect, breedable pokemon. A great fun fact, umbreon can excrete toxins in it's sweat, which would in turn soak your member and swell it up, making it even more sizable and sensitive. This would not only enhance the experience for you, but for your umbreon as well (which with synchronise, ends up pleasing you exponentially more). It can learn payback, which doubles in power after the pokemon is hit, meaning umbreon will throw it back twice as hard as normally if you're hitting it good. Umbreon can also learn guard swap, it could give you it's insane durability, and go crazy on you all night with your now massive endurance. Speaking of endurance, umbreon also has access to endure, making it practically immune to fatigue, it will always have energy left over. Charm is also within umbreon's movepool, letting it be extremely seductive towards you, easily getting you in the mood. Umbreon can also use taunt, in turn making you only able to do attacking moves such as slam, pound, etc; It's access to the abilities inner focus and synchronise allow it to unwaveringly throw it back and add all of it's pleasure onto yours, effectively making it twice as amazing as any other pokemon, or even four times, factoring in the doubled power of payback of course. All of this information in combination with it's extremely useful movepool in the world of intercourse makes umbreon the most qualified to breed with humans; able to take dick of any shape, any size, in any position easily for extensive periods of time, while having the ability to return for even more mere seconds later."],
            ["vaporeon", "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans? Not only are they in the field egg group, which is mostly comprised of mammals, Vaporeon are an average of 3\"03’ tall and 63.9 pounds, this means they’re large enough to be able handle human dicks, and with their impressive Base Stats for HP and access to Acid Armor, you can be rough with one. Due to their mostly water based biology, there’s no doubt in my mind that an aroused Vaporeon would be incredibly wet, so wet that you could easily have sex with one for hours without getting sore. They can also learn the moves Attract, Baby-Doll Eyes, Captivate, Charm, and Tail Whip, along with not having fur to hide nipples, so it’d be incredibly easy for one to get you in the mood. With their abilities Water Absorb and Hydration, they can easily recover from fatigue with enough water. No other Pokémon comes close to this level of compatibility. Also, fun fact, if you pull out enough, you can make your Vaporeon turn white. Vaporeon is literally built for human dick. Ungodly defense stat+high HP pool+Acid Armor means it can take cock all day, all shapes and sizes and still come for more"],
            ["jolteon", "Hey guys did you know that in terms of human vibrators, Jolteon is the best pick? Not only does jolteon have a high sp attack stat, it also learns discharge on level up. Jolteon can also control the electricity damage output making it able to not hurt it's trainer. Paired with helping hand, Jolteon is the best pokemon vibrator for humans like us. Add Agility in the mix and then you'll get a perfect vibrator."],
            ["flareon", "Hey, did you know that in terms of male human and female pokemon breeding, that flareon may not be the best suited when compared to its cousins such as vaporeon or umbreon. But it's small physique and lightweight of 2'11\" and 25kg, it would serve a tight but usable delight for your tight desires. Along with its egg group of 'field' a Flareon is very capable of breeding with humanoid creatures unlike its cousin vaporeon. Its exp growth of medium to fast also allows it to quickly adjust to your body and what you desire, allowing for a more pleasurable experience. Flareon has a very impressive base attack and decent defences that are perfect for those who desire to be dominated, but its lower defensive stat allows you to return what it had given you, but its high special defence allow for all sorts of mental and emotional abuse, and it will power right through. Flareon does have an issue of its body reaching 1,700 degrees celsius, but as with other pokemon from the fire typing, they are not expressly immune to the flames, meaning that the genitalia would be much cooler as to not harm other Flareons, meaning it will provide a warm, but satiable hole. With Flareon's ability to learn moves such as endure, attract, stored power, charm, and scary face, it has the express ability to satiate the needs you want, being able to endure so much satisfaction, and charming you until you cum, then it will release all it has endured along with you. This is all without mentioning its other physical features. Flareon’s have manes of fur, ponytails and fluffy tails, the rest of their body covered in warm orange fur. This makes handling the Flareon easy as you’re able to grab the fur around its neck and manipulate it as you please, using it to choke or trap it from escaping. The tail makes it easier to latch onto as well, being able to stop it moving unless you want it to. The lack of protective fur around its chest makes its nipples easy to view and manipulate, allowing you freedom to use it as you please. In fact, one of Flareon’s hidden abilities is Guts, making it so that whenever the Flareon is affected by a status effect, their Attack increases by 50%, this means that you and your Flareon are able to get into some kinky situations! SO, should your Flareon be asleep and you need to relieve yourself, they’ll be immediately ready, giving back 1.5 times the pleasure as usual! This also works with paralyse, should your desires be to restrict your Flareon, allowing you complete freedom over its body. It’s that simple! Even more though, with your Flareon’s guts ability and its ability to learn sleep talk, you can perform played out rape for the weird people, and it can still use its increase sleeping damage to unconsciously return what you give it. But more than that, Flareon is the most huggable pokemon in terms of Human and Pokemon companionship. Not only is it able to warm its body up to the perfect hugging temperature, but it also has the aforementioned fluffy orange fur, that is no doubt incredibly soft. But more than this, because of its special defence stat, its able to withstand any emotional venting and be perfectly fine, meaning that a Flareon can cure your depression if treated right! There is no doubt that Vaporeon is the most compatible Pokemon when talking in terms of Male Human and Female Pokemon breedability, however Flareon is second second to none when comparing a long term relationship. Flareon has a resistance to any emotional damage meaning that they’ll be by your side no matter what, their high attack stat means that the Flareon will never fail to be able to please you, using every single skill in their arsenal to make you happy. Flareon’s body is practically designed for use, perfectly inviting and built for the long haul, the Flareon’s loyalty never failing to be by your side."],
            ["espeon", "Hey everyone, did you know that in terms of psychic type Pokemon, Espeon is one of the most comforting to those who struggle with their mental health? Its soft, short fur is often likened to velvet, which would be really calming to stroke during a panic or anxiety attack. Espeon often sunbathes to recharge its psychic powers, and is said to be able to predict its opponent's next move, people's thoughts, or even the weather with its psychic powers, so it could spot a bad day from a mile away and act as a kinda service animal to those in need. Plus, since it's been in the sun, it would be nice and warm to the touch if you found it shortly after it sunbathed. Not to mention, espeon is beyond loyal - bad friends, abusive exes, and rude family members are bound to throw you to the wolves, but espeon will always be there to bring you back to safety and comfort. Oh yeah, and its psychic powers were said to be awakened by a desire to protect its trainer from harm, and the fact that espeon is a friendship evolution only proves just how much it loves you! Sounds great, yeah? Oh, but it somehow gets even better! Possessing an average size of 2'11 and 58.4 lbs, espeon is just the right size for cuddling next to you wherever you may be: a bed, the couch, or even by your feet if you're working at a desk. Also? Its large ears are perfect for receiving scritches, and its forked tail would be fun to gently twirl around as a form of stimming if needed. Yeah, vaporeon may be a \"Haha funny meme evolution\", espeon is where life's true comfort can be found."],
            ["leafeon", "Hey, did you know that in terms of Human Male and Female Pokemon breeding that Vaporeon and Umbreon are the most compatible. This is correct, however there is another Eevee that is equal in breedability to them. Leafeon is in similar proportions and characteristics to its rivals. Leafeon is found in the field egg group (meaning that Leafeon’s are much more compatible due to their mammalian nature) it has a height of 3’03\” (about one metre), although, an immediate feature that Leafeon has an advantage over is it’s lighter weight of 56.2 pounds (or 25.5 kg), this makes it easier for handling, making the repeated back and forth movement easier however no less pleasurable with the Leafeon’s readily available body, perfectly built to handle even the largest of human genitalia. Leafeon is the most adaptable Eevee evolutions, being a literal sentient plant, Leafeon has all of the abilities of a plant. Its very high defence stat makes it resilient to nearly any type of physical damage, this means that no matter the activity, Leafeon would be able to sustain a myriad of injury or abuse and leave unscathed. And when you’ve fully exhausted all of their body with the power of your vigorous plunges, Leafeon can use their move Synthesis, meaning that they can recover any damage dealt to them, the effect can also be doubled if in sunlight, meaning that they able to heal themselves within moments of being in the sun and be rejuvenated to go for ANOTHER session all over again. All Leafeons are empowered by the sun, this makes daytime or even public pounding sessions desirable, as well as this, Leafeons have special abilities that assist them when in daylight. Leaf Guard makes your fuckbuddy immune to some status affects, meaning that no matter the situation, they’ll never be able to stop pleasuring you. But Leafeon doesn’t stop there, while being immune to status effects in the sun, they also have the hidden ability Chlorophyll doubling their already POWERFUL speed stat, this makes Leafeon immediately the fastest of all the Eevee’s making an immediately pleasurable experience. While some may argue that those abilities are purely situational and that they only work when the sun is out, they are absolutely correct. BUT when your Leafeon is in the mood they have access to the move Sunny Day, so when they’re begging for a pounding, no matter the weather they are able to light up wherever you are with sunlight, enabling their body to be fucked at peak performance. But Leafeon can be used for more than that! Leafeon is a pacifistic Pokemon, making it the perfect sub for dominating. Leafeon’s structure is wholly similar to plants, this makes it so that they can photosynthesise and the like. But this introduces multiple new avenues that are not available with the other Eevee evolutions. Like all living things, plants need nutrients and satiation, however they are much less picky and are able to absorb much more. That means that once you and your Leafeon are satisfied, they are able to consume all of your ejaculated fluids and utilise it for nutrition, giving even more of an incentive for them to constantly be begging for your cock. But are you kinkier than the average person? Do you want to push what is reasonably allowed? Well lucky for you then! Leafeon is perfect for all kinds of crazy things. Because Leafeon is a plant that means that they no doubt taste like one as well, making vore absolutely possible. But even if you aren’t into that, Leafeon is no doubt persuasive in putting you in the mood. Of course Leafeon has access to the moves Charm and Baby-Doll Eyes, but what if it can’t use any moves? Well they naturally have a distinctive smell which is favoured and used as a perfume, but depending on the mood of the Leafeon the smell they excrete would be similar to an aphrodisiac, which would make anyone horny, either enhancing or completely skipping foreplay. But these aphrodisiacal properties aren’t just in their scent, it would permeate into their fluids, so if you ever go down on them you wouldn’t be able to stop, probably making you ejaculate just from the chemical sensations. So, although Umbreon and Vaporeon have their merits when it comes to their breed ability, Leafeon just has too many extra benefits that just can’t be ignored. While not having as many abilities as its cousins, Leafeon just can’t be beat when you compare pure body characteristics, making even the most resilient weak in their knees when exposed to a Leafeon’s sexually ready body. From being easy to handle, to being able to take any type of genitalia and damage, all the way to being able to manipulate you by just their scent, Leafeon is the clear winner for most breedable Pokemon."],
            ["glaceon", "Hey guys, did you know that in terms of male human and female Pokémon fucking, Glaceon is the most attractive Pokémon for humans? They are in the field egg group which, as many Vaporeon connoisseurs would know, is mostly comprised of mammals (thus allowing breeding, however that is not what Glaceon should be praised for as you'll soon understand). Glaceon are an average of only 2'07\" tall and 57.1 pounds, allowing them to be easily subdued by most average human males, while still being perfectly capable of handling human dicks, from the front, with a very aesthetically pleasing face and a short feline muzzle, and the back, with thick thighs you wouldn't expect on such a lean and graceful Pokémon. They also have a great defense stat, despite being a special attacker, allowing you to get real rough with one, and if that wasn't enough and you really wanted to smack one of those slutty fuckers around, because of them being easily able to create hail around their body and their hidden ability, ice body, they can quickly regenerate hp after you're done with them for a bit, allowing you to get right back to Glaceon fucking in a matter of minutes. Now I know what you may be thinking: because of their ice based biology, there's no way a human dick could handle such low temperatures, right? And that's where you're wrong, a thing Glaceon are really great at is controlling their body heat, thus allowing one of them to easily reach temperatures hot enough for you to comfortably shove your dick inside of one and feel great doing it. You may think Glaceon would be completely dry during this, due to not being a good ol' Vaporeon, however Glaceon can easily emanate powdery snow from their body, and because of their previously mentioned body heat ability, there's no doubt in my mind a Glaceon could get really wet for your cock's enjoyment inside of them. They have easy access to moves like Baby-Doll Eyes, Attract and Captivate, however these are all moves Glaceon won't need, as they are naturally capable of enamouring anyone with their captivating beauty, a skill they mostly use while hunting as predators, however a trained Glaceon is docile, cool and collected, thus allowing them to use those innate skills for your pleasure as their trainer instead of your demise. The moves you should really, truly be looking out for in your Glaceon of choice are Helping Hand and Endure. If you want the Glaceon to take control and do the work for you, Helping hand will do the trick, as a Glaceon's skillful, soft and cool paws are definitely able to make quick work of any desire your dick may have. And if instead you wish to destroy one of them with your pure masculine strength for hours uninterrupted, a Glaceon can just Endure through all of it, ensuring they will never faint in the middle of it and not even requiring breaks to regenerate their HP. No other Pokémon comes close to this level of sheer attraction and fuckability, with their thin, soft fur and their elaborate diamond-shaped patterns all over their submissive bodies. Also, fun fact, Glaceon has the highest special attack of any non-legendary ice Pokémon, making it an apex predator in the wild Arctic environment, and the fact that such a special attacking powerhouse can be your willing servant is the peak of sexual arousal for any male top. Glaceon is literally built to make you hard and ready to fuck for hours on end. Good defense+easy access to Endure+Ice Body means it can handle any amount of cocks all day, from their perfectly heated up muzzle or their warm ass/vagina, or even both at the same time if you wish to share one of those sluts with a friend! They will keep you aroused with their natural beauty and let you use them for as long as you can last"],
            ["sylveon", "Vaporeon is NOT the most compatible pokemon for humans in terms of male human and female pokemon breeding. Sylveon is. They reside in the very same egg group as Vaporeon being from the same evolution basis of Eevee. Sylveon are on average 3\"03' tall and 51.8 bls making Sylveon equal in height to Vaporeon albeit 12,1 pounds lighter meaning that in terms of fun in bed Sylveon's lesser weight would allow you as their breeder to more easily lift them and change position at a whim making them not only the perfect size to handle human cock but the perfect weight to play with in bed. On top of Sylveon's superior defense and special defense stat and their access to reflect which halves on coming attacks effectively doubling their defense means you can spank as hard as you wish and Sylveon will be able to take it all and then some. All of this is on top of Sylveon's most common ability being cute charm which has a 30% chance of infatuating anyone of the opposite gender who comes into contact with Sylveon. This means every time you spank, bite, kiss, thrust into Sylveon you will have a decent chance of becoming even more infatuated with them than you already are making them perfect for some rough sex. As well as being a fairy type pokemon there is no doubt in my mind that Sylveon pussy is just down right magical. Wetness be damned when Sylveon is packing a pussy that's unlike anything you'd have ever felt before. Sylveon like Vaporeon also has access to the moves Attract, Baby-Doll eyes, Captivate, Charm and Tail Whip on top of having cute charm as an ability means simply touching a Sylveon could easily get you in the mood and with soft and fluffy fur all over after you've finished the cuddle sessions would be immaculate and with no worry of a completely soaked bed to speak of. And with the ability to get wish, if taught to them before they evolve, can still give Sylveon the ability to recover from and any and all rough play you can have with it with, again, no risk of a completely soaked bed to think of. Sylveon is clearly without equal when it comes to sexual compatibility. Also fun fact if you Sylveon can also learn draining kiss so not only are their pussies magical their mouths are as well. Vaporeon may have been built for human cock but Sylveon were built to give the human cock a truly ascended experience. Greater defense stat + reflect + cute charm + draining kiss means you'll be experiencing the climax of a life time every time you have sex with one and it would still be able to give you more and more and more."],
            ["eevee", "I can't help it anymore. I want to yank that furry tail up and bury my face inside her little asshole and claim it as mine. I never considered myself a furry, but Eevee has fully converted me into a Pokefucking freak. It's not even fucking fair. The game practically begs you to want to fuck her. The game literally calls the Eevee your partner throughout the whole game. God, I fucking wish that applied to real life. Don't even get me started on the \"play\" feature. Whenever I have that HD Eevee sitting on my arm, my dick can't help but grow at the sight of its sexiness. Whenever I pet her to raise her affection, she makes these cute hentai girl moans and god fucking damnit it's almost like Nintendo wants me to destroy this cute little fuck."],
            ["balls", "https://tenor.com/view/hi-cutie-sunderland-balls-baller-gif-16017134"],
            ["penis", "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ https://cdn.discordapp.com/attachments/794975038616895488/1128789185168408616/0z5eb9j.mp4"],
            ["sleep", "Sleep?, Nah thats overrated."],
            ["piss", "https://cdn.discordapp.com/attachments/794975038616895488/1143273294242529360/FMuE7h-VEAEAyfh.png"],
            ["issue", "https://tenor.com/view/pissue-what-seems-to-be-the-pissue-officer-officer-whatseemstobethepissueofficer-gif-4271305587235386468"],
            ["connection", "||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​|| _ _ _ _ _ _ https://cdn.discordapp.com/attachments/794975038616895488/1143275208246038640/videoplayback_1.mp4"],
        ]);

        keywords.forEach((response, keyword) => {
            if (messageContent.includes(keyword)) {
                const chunks = response.match(/[\s\S]{1,2000}(?!\S)/g) || [];
                chunks.forEach(async chunk => {
                    await message.reply(chunk);
                });
            }
        })

    }
}
