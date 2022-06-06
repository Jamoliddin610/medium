import { v4 as uuidv4 } from "uuid";
let data = [
    {   
        id: uuidv4(),
        avatar:'https://miro.medium.com/fit/c/30/30/1*2uZNASNFjSVqQxmFlE5yvA.jpeg',
        name: 'Codeart',
        title:'UI/UX Design Trends of 2022',
        updated:'Jan 26',
        isTrue: false,
        categoryId: '',
        topic:'Programming',
        read:'7',
        img:'https://miro.medium.com/fit/c/140/140/1*gfQL8iTqOKozDq10UZ_xxQ.jpeg',
        desc:'As 2021 is coming to a close, we are taking the time to review some of the most notable trends for the upcoming year.',
        text:`These past couple of years serve as particularly strong evidence of the constant and fast development happening in the UX/UI industry — both in terms of technologies and design trends implemented. Explorations are unfolding in all sorts of directions — some short-lived, some reimagined and some recurring with a greater focus than ever before. Below we present to you in greater detail some of the explorations that will stick throughout 2022.`,
        post:{
            liked: 26,  
            isLiked: false,
            comments: [
                {
                    commentId: uuidv4(),
                    commentName: "Sadha Moodley",
                    commentAvatar: "https://picsum.photos/id/31/692/460",
                    commentText: "So virtual assistants make more than programmers ?",
                    commentDate: 15  ,
                    commentLike: 2
                },
                {
                    commentId: uuidv4(),
                    commentName: "Robert Lee",
                    commentAvatar: "https://picsum.photos/id/32/692/460",
                    commentText: "When I was a kid, I helped my dad manage a makeshift vending machine at his work place. It was a good way for me to learn what managing a business looks like. We had to price the products, manage inventory, and manage our expenses. It might be a good “soft” launch into entrepreneurship.",
                    commentDate: 16  ,
                    commentLike: 12
                },
                {
                    commentId: uuidv4(),
                    commentName: "Parpella Kerala",
                    commentAvatar: "https://picsum.photos/id/33/692/460",
                    commentText: "Not everything will suit everyone. useful list though..",
                    commentDate: 17  ,
                    commentLike: 7
                },
                {
                    commentId: uuidv4(),
                    commentName: "Trusted Advisors Network",
                    commentAvatar: "https://picsum.photos/id/34/692/460",
                    commentText: "Thank for the ideas. Love that you also included the worst ideas.",
                    commentDate: 18  ,
                    commentLike: 4
                },
                {
                    commentId: uuidv4(),
                    commentName: "Sujit Patil",
                    commentAvatar: "https://picsum.photos/id/35/692/460",
                    commentText: "Vending Machine idea looks promising. Thanks for sharing :)",
                    commentDate: 19  ,
                    commentLike: 8
                },
                {
                    commentId: uuidv4(),
                    commentName: "Nainasatti",
                    commentAvatar: "https://picsum.photos/id/36/692/460",
                    commentText: `follow me all plz this is my blogs articles mysonmystrength.blogspot.com`,
                    commentDate: 20  ,
                    commentLike: 3
                },
                {
                    commentId: uuidv4(),
                    commentName: "Julia Freeman, an anonymous survivor",
                    commentAvatar: "https://picsum.photos/id/37/692/460",
                    commentText: `I am working on a membership site. My biggest downfall is learning and using promotion.
        Thanks for sharing lots of great ideas to make a passive income.`,
        commentDate: 1  ,            
        commentLike: 5
                },
                {
                    commentId: uuidv4(),
                    commentName: "Ghazal Lasfar",
                    commentAvatar: "https://picsum.photos/id/38/692/460",
                    commentText: `thanks for sharing, i am starting a new youtube channel and it's really need a hard work to make it grow but it worth it`,
                    commentDate: 21  ,
                    commentLike: 7
                }
            ]
        }
    },
    {
        id: uuidv4(),
        avatar: 'https://miro.medium.com/fit/c/30/30/1*QDJsKs7OV9h6R5aaMJaOFQ.png',
        name: 'Henrik Larsen Toft',
        title: '5 Concepts That Will Make You a Better React Developer',
        updated: 'May 29',
        isTrue: false,
        categoryId: '',
        topic: 'Programming',
        read: '4',
        img: 'https://miro.medium.com/fit/c/140/140/0*bfyviVoMX5tZ85GU',
        desc:'Learn how to leverage advanced React concepts to become a better React developer.',
        text: `  As you already know hooks are a new addition in React 16.8 that will let you use state and other React features without writing a class or component.Building your own custom hooks are a great way of extracting component logic into functions that can be reused and tested independently.`,

        post:{
            liked:29,
            isLiked: false,
            comments:[
                {
                    commentId: uuidv4(),
                    commentName: "Alexjscoggins",
                    commentAvatar: "https://picsum.photos/id/79/692/460",
                    commentText: "Excellent!",
                    commentDate: 1  ,
                    commentLike: 19
                },
                {
                    commentId: uuidv4(),
                    commentName: "Cam Billings",
                    commentAvatar: "https://picsum.photos/id/65/692/460",
                    commentText: `Hi Nick!
        I love the idea of making practice your playground! It significantly lowers the stakes of each situation.And it makes things fun! We can kick back and be in the moment, not stressing out about the perfect things to say/do.`,
        commentDate: 1  ,            
        commentLike: 7
                },
                {
                    commentId: uuidv4(),
                    commentName: "Claudia Ciobanu",
                    commentAvatar: "https://picsum.photos/id/76/692/460",
                    commentText: `Love your article!`,
                    commentDate: 2  ,
                    commentLike: 4
                },
                {
                    commentId: uuidv4(),
                    commentName: "Gaurav Sharma",
                    commentAvatar: "https://picsum.photos/id/457/692/460",
                    commentText: `How to make habits is also a great skill to be learnt from the book Atomic Habits by James Clear.
        Read it here and experience the inexperienced:`,
        commentDate: 1  ,            
        commentLike: 1
                },
                {
                    commentId: uuidv4(),
                    commentName: "Ghazal Lasfar",
                    commentAvatar: "https://picsum.photos/id/38/692/460",
                    commentText: `thanks for sharing, i am starting a new youtube channel and it's really need a hard work to make it grow but it worth it`,
                    commentDate: 3  ,
                    commentLike: 9
                }
            ]
        }
    },
    {
        id: uuidv4(),
        avatar: 'https://miro.medium.com/fit/c/30/30/1*rhvwW5suGypWKG_iJqFWcA.jpeg',
        name: 'Rebecca Vickery',
        title: '3 Free Machine Learning Courses You Should Take Right Now',
        updated: 'May 28',
        isTrue: false,
        categoryId: '',
        topic: 'Programming',
        read: '6',
        img: 'https://miro.medium.com/fit/c/140/140/1*JIRNLjwWq-YbFfRp9JJsZA.jpeg',
        desc: 'There are many ways to get started with studying machine learning. I have previously written a lot about how to design your own curriculum and roadmap as an alternative to taking courses',
        text: `This approach allows you to pick and choose free, or low-cost, resources from across the internet that suit both your learning style and budget.However, when you are just starting out on the beginning of your journey into machine learning it can often be useful to follow at least a short course that will guide you through the basic concepts first. This will give you a good foundational overview of the field and it will make it easier to design your own learning path and then continue on with deeper self-directed learning.`,
        post:{
            liked:28,
            isLiked: false,
            comments: [
                {
                    commentId: uuidv4(),
                    commentName: "JF Danskin",
                    commentAvatar: "https://picsum.photos/id/89/692/460",
                    commentText: "Nice article, very helpful tips!!",
                    commentDate: 6  ,
                    commentLike: 15
                },
                {
                    commentId: uuidv4(),
                    commentName: "Michael M-C",
                    commentAvatar: "https://picsum.photos/id/15/692/460",
                    commentText: `Good article. I like this section because making your intentions clear is important. I’ve gone on dates with women who’ve later told me they’re only looking for platonic friends, which makes thing awkward. So, clear communication—especially early—is key.`,
                    commentDate: 10  ,
                    commentLike: 6
                },
            ]
        }
    },
    {
        id: uuidv4(),
        avatar: 'https://miro.medium.com/fit/c/60/60/1*KCxXwmPqMoulWutRuOZouA.jpeg',
        name: 'JG Hall',
        title: 'Trying to learn Arabic, as a Muslim — Reflections and thoughts (after a decade of attempts)',
        updated: 'May 31',
        isTrue: false,
        categoryId: '',
        topic: 'Language',
        read: '13',
        img: 'https://miro.medium.com/fit/c/140/140/1*J2jFGkLBGxi_oTwAAryyhA.jpeg',
        desc: 'In a decade, you can achieve much. You might complete an Undergrad or Master’s degree, you could get married and start a family, build a new career, or even, reach a level of native fluency in a second language.',
        text: `Yet, here I am, starting another Arabic course for the umpteenth time at the end of the month. I have made countless attempts to self-study, gone through more teachers than a monkey will go through bananas, and ‘lost’ money as quick as an amateur Crypto-bro, on Arabic lessons, books, and online resources. But, still cannot competently read a basic children’s book in Arabic without a dictionary nor (at least, not any longer), sustain a basic conversation.`,
        post:{
            liked:31,
            isLiked: false,
            comments: [
                {
                    commentId: uuidv4(),
                    commentName: "Monamohsin",
                    commentAvatar: "https://picsum.photos/id/61/692/460",
                    commentText: "Nice piyush",
                    commentDate: 1  ,
                    commentLike: 31
                },
                {
                    commentId: uuidv4(),
                    commentName: "Businessak",
                    commentAvatar: "https://picsum.photos/id/65/692/460",
                    commentText: `Interesting idea, but how passive would u say this method end up being? And is it worth the time?`,
                    commentDate: 3  ,
                    commentLike: 4
                },
                {
                    commentId: uuidv4(),
                    commentName: "Boris Epshtein",
                    commentAvatar: "https://picsum.photos/id/69/692/460",
                    commentText: "What's your web site?",
                    commentDate: 4  ,
                    commentLike: 2
                },
                {
                    commentId: uuidv4(),
                    commentName: "Kyle",
                    commentAvatar: "https://picsum.photos/id/55/692/460",
                    commentText: `If you are looking for ways to make money on Cryptocurrency using Coinbase app, reply to this comment and I will show you steps by steps on how you can cashout $5000 every week using this method that I'm going to show,
        But you must promise to pay me 30% from your earnings`,
        commentDate: 4  ,            
        commentLike: 16
                },
                {
                    commentId: uuidv4(),
                    commentName: "Parpella Kerala",
                    commentAvatar: "https://picsum.photos/id/49/692/460",
                    commentText: "Good one",
                    commentDate: 6  ,
                    commentLike: 11
                },
                {
                    commentId: uuidv4(),
                    commentName: "Aura A.",
                    commentAvatar: "https://picsum.photos/id/83/692/460",
                    commentText: `Helpful writing!`,
                    commentDate: 10  ,
                    commentLike: 7
                },
            ]

        }
    },
    {
        id: uuidv4(),
        avatar: 'https://miro.medium.com/fit/c/30/30/1*Xg7To9Xl0TTGbFlAuZ208Q.jpeg',
        name: 'Maral',
        title: 'How to Learn a Language with Google Translate and Podcasts',
        updated: 'May 14',
        isTrue: false,
        categoryId: '',
        topic: 'Language',
        read: '2',
        img: 'https://miro.medium.com/fit/c/140/140/0*Ukz343nK43jVhky2',
        desc: 'Lately, I’ve been challenging myself by combining passive learning methods with active learning methods in my language learning journey.',
        text: `Previously, I’ve mentioned in one of my articles how listening to podcasts in the target language can be a great addition to one’s learning journey.I had also mentioned in one of my articles how I used Google Translate at the beginning of my Swedish learning journey when I had no clue about the language, which helped me a lot in the beginning.`,
        post:{
            liked:14,
            isLiked: false,
            comments: [
                {
                    commentId: uuidv4(),
                    commentName: "Uche Lawrence",
                    commentAvatar: "https://picsum.photos/id/61/692/460",
                    commentText: `Criprostans.com this is the most profitable investment platforms where all your financial status change for better.Daily Investment plan for new and old investors`,
                    commentDate: 11  ,
                    commentLike: 13
                },
                {
                    commentId: uuidv4(),
                    commentName: "Ruchika Pagare",
                    commentAvatar: "https://picsum.photos/id/65/692/460",
                    commentText: `Thanks for sharing this. It was very helpful.`,
                    commentDate: 11  ,
                    commentLike: 41
                },
                {
                    commentId: uuidv4(),
                    commentName: "Gerrickmorrison",
                    commentAvatar: "https://picsum.photos/id/69/692/460",
                    commentText: `I never thought it was possible to recover stolen cryptocurrency due to past experience trying to recover $228k that was stolen from my usdt w.a.l.l.e.t; until I read an article on this webpage www.thedailychargeback.com, I summited all documents…...`,
                    commentDate: 12  ,
                    commentLike: 27
                },
                
            ]
        }
    },
    {
        id: uuidv4(),
        avatar: 'https://miro.medium.com/fit/c/30/30/1*lFWV94z6lweRTvmuxY_lOA.png',
        name: 'New Globe Utopia',
        title: 'The Language of Intelligence',
        updated: 'Aug 13',
        isTrue: false,
        categoryId: '',
        topic: 'Language',
        read: '4',
        img: 'https://miro.medium.com/fit/c/140/140/0*1wcOLbN30p2xQlbu',
        desc: 'For centuries, humanity has pondered the Intelligence that governs nature and Scientists have attempted to unravel the nature of the brain.',
        text: ` A consensus on the definition of intelligence has yet to happen, as intelligence has different definitions depending on the field of study. The prevailing theory today is that intelligence is local to the brain.The Unified Intelligence DAO is a decentralized, autonomous organization challenging this perspective with the belief that investigating the distinction between Human intelligence and nature’s intelligence can help humanity build more efficient and symbiotic systems. At The Unified Intelligence DAO, we believe that to build such Artificial Intelligence Systems, we must first understand General intelligence.`,
        post:{
            liked:13,
            isLiked: false,
            comments: [
                {
                    commentId: uuidv4(),
                    commentName: "Sameer Makhani",
                    commentAvatar: "https://picsum.photos/id/59/692/460",
                    commentText: `Hello everyone.
        If you like my work please support me here.
        https://www.buymeacoffee.com/sammakhanip`,
        commentDate: 1  ,            
        commentLike: 9
                },
                {
                    commentId: uuidv4(),
                    commentName: "Kyle Poston",
                    commentAvatar: "https://picsum.photos/id/60/692/460",
                    commentText: "Be who you can afford to be",
                    commentDate: 5  ,
                    commentLike: 11
                },
                {
                    commentId: uuidv4(),
                    commentName: "Nertilagjoshi",
                    commentAvatar: "https://picsum.photos/id/61/692/460",
                    commentText: "Nice read! The rich.. have a very different way of thinking!",
                    commentDate: 6  ,
                    commentLike: 10
                },
                {
                    commentId: uuidv4(),
                    commentName: "Quyen Nguyen",
                    commentAvatar: "https://picsum.photos/id/62/692/460",
                    commentText: `Nice stuff. After read your post, i am considering to buy a new cheaper mobile instead of iphone.`,
                    commentDate: 7  ,
                    commentLike: 8
                },
                {
                    commentId: uuidv4(),
                    commentName: "Chibext34",
                    commentAvatar: "https://picsum.photos/id/63/692/460",
                    commentText: "Great read.",
                    commentDate: 8  ,
                    commentLike: 6
                }
            ]  

        }
    },
    {
        id: uuidv4(),
        avatar: 'https://miro.medium.com/fit/c/30/30/1*XVE3BIo5q7-CWjJPt2rcfg.jpeg',
        name: 'Mike Hickman',
        title: 'Like We Know What’s Happening',
        updated: 'May 7',
        isTrue: false,
        categoryId: '',
        topic: 'Social Media',
        read: '3',
        img: 'https://miro.medium.com/fit/c/140/140/1*TK3hipBJeqgIKR8iUCQIEg.jpeg',
        desc: 'On September 26th, 1983, had it been around back then, the permanent mental excoriation that is Twitter’s “What’s Happening” sidebar would have entirely missed the fact that we were all in imminent danger of annihilation.',
        text: `If I’d had Twitter back then, my personal sidebar might conceivably look different from those of others around the world. (How do we know? How do we really know, without peering over the shoulders of everyone else using Twitter at the same time as us?) I’d expect, although the six-year-old me wouldn’t be terrifically interested, that there’d be an impolite #Thatcher hashtag or two. As Doctor Who’s 20th anniversary was approaching, and depending on how much the algorithm took notice of my own interests, there might have been the usual hashtag or three for that series. And perhaps the top movies of the day might have got a look in. Return of the Jedi, for definite, even if it was a few months old.`,
        post:{
            liked:7,
            isLiked: false,
            comments: [
                {
                    commentId: uuidv4(),
                    commentName: "Nick McKenna",
                    commentAvatar: "https://picsum.photos/id/57/692/460",
                    commentText: "So true. You have to get out of your comfort zone in order to learn something. Great article!",
                    commentDate: 11  ,
                    commentLike: 3
                },
                {
                    commentId: uuidv4(),
                    commentName: "J. R. Micheaux",
                    commentAvatar: "https://picsum.photos/id/58/692/460",
                    commentText: `Such a salient but often overlooked point.
        People derive a ton of pleasure envisioning a better reality but then get caught up by the pain of making real change.
        Oftentimes, I find it comes down to a true assessment of what you actually value vs…...`,
        commentDate: 12  ,            
        commentLike: 2
                }
            ]
        }
    },
    {
        id: uuidv4(),
        avatar: 'https://miro.medium.com/fit/c/30/30/1*XVE3BIo5q7-CWjJPt2rcfg.jpeg',
        name: 'Kasey Wagner',
        title: '2 New Tools To Test On Instagram',
        updated: 'March 8',
        isTrue: false,  
        categoryId: '',
        topic: 'Social Media',
        read: '4',
        img: 'https://miro.medium.com/fit/c/140/140/1*c2pXATWEzdP2i0cH1rua_w.jpeg',
        desc: 'How Instagrams latest tools help both creators and brands reach a larger audience and drive sales.',
        text: `For both creators and brands, it’s safe to say that Instagram can be stressful at times. Keeping up with the latest Instagram features can be exhausting, especially when you’re making sure you’re quick to adapt and finding new ways to apply it to your content. With competition from TikTok, typically the goal of these new features is to increase engagement and encourage new ways of connecting with other users within the app. Reels has been a huge success on Instagram, mimicking the short form content of TikTok with features including morphing clips together, adding trending music, and the ability to add voice-over to name just a few of the ways the new video format has allowed creators to reach a larger audience.`,
        post:{
            liked:8,
            isLiked: false,
            commentArr: [
                {
                    commentId: uuidv4(),
                    commentName: "Emily Mark",
                    commentAvatar: "https://picsum.photos/id/64/692/460",
                    commentText: `Perfect timing for me to read this! I wrote a piece recently about life getting a little too peaceful.. it But its about taking time to play, be curious and explore. Shaking things up and facing our fears....`,
                    commentDate: 1  ,
                    commentLike: 8
                },
                {
                    commentId: uuidv4(),
                    commentName: "Mary V",
                    commentAvatar: "https://picsum.photos/id/65/692/460",
                    commentText: "Fab reminder that life is also what we make of it!",
                    commentDate: 1  ,
                    commentLike: 1
                },
                {
                    commentId: uuidv4(),
                    commentName: "Edina Brown",
                    commentAvatar: "https://picsum.photos/id/66/692/460",
                    commentText: "So true. Play is healthy. I guess it'll have to be branded as a new exercise fad. Then people will do it ",
                    commentDate: 2  ,
                    commentLike: 6
                }
            ]
        }
    },
    {
        id: uuidv4(),
        avatar: 'https://miro.medium.com/fit/c/30/30/1*DEYlbQx86lHy9qnBqQbAhQ.png',
        name: 'Claudiu',
        title: '10 Things to Consider Before Becoming a Content Creator',
        updated: 'July 4',
        isTrue: false,
        categoryId: '',
        topic: 'Social Media',
        read: '7',
        img: 'https://miro.medium.com/fit/c/140/140/0*PHDxxEPdNzwceFCS',
        desc: 'If you’ve ever considered becoming a content creator, congratulations! The decision to start your own blog, podcast, or video series is an exciting one. After all, the world, or at least that part of it that’s online is your oyster',
        text: `If you’ve ever considered becoming a content creator, congratulations! The decision to start your own blog, podcast, or video series is an exciting one. After all, the world, or at least that part of it that’s online is your oyster.If you’ve ever considered becoming a content creator, congratulations! The decision to start your own blog, podcast, or video series is an exciting one. After all, the world, or at least that part of it that’s online is your oyster.`,
        post:{
            liked:4,
           isLiked: false,
            comments: [
                {
                    commentId: uuidv4(),
                    commentName: "Allison Hester",
                    commentAvatar: "https://picsum.photos/id/67/692/460",
                    commentText: `Thank you for writing this. I am trying to find more ideas and resources to help me write better content. I enjoyed your article and look forward to reading more from you. Thanks again.`,
                    commentDate: 1  ,
                    commentLike: 16
                }
            ]
        }
    },
    {
        id: uuidv4(),
        avatar: 'https://miro.medium.com/fit/c/30/30/1*-LYrFHhssflRu9pxAdbBZQ.jpeg',
        name: 'Manoj Ahirwar',
        title: 'Top 10 Richest People in the World',
        updated: 'Dec 19',
        isTrue: false,
        categoryId: '',
        topic: 'World',
        read: '1',
        img: 'https://miro.medium.com/fit/c/140/140/1*R6v7GgRUjD3hBa2etZT-Mw.jpeg',
        desc: 'These are the Top 10 wealthiest people in the world. as of 29th May 2022',
        text: `1. Elon Musk,2. Bernard Arnault & family,3. Jeff Bezos,4. Bill Gates,5. Warren Buffett,6. Gautam Adani & family,7. Larry Ellison,8. Larry Page,9. Mukesh Ambani,10. Carlos Slim Helu & family`,
        post:{
            liked:19,
            isLiked: false,
            comments: [
                {
                    commentId: uuidv4(),
                    commentName: "Sadha Konthi",
                    commentPic: "https://picsum.photos/id/313/692/460",
                    commentDesc: "Passive income is the goal! It is possible through exchanges and not through banks! personally i use gateio & binance",
                    commentArrs: [],
                    commentDate: 3  ,
                    commentLike: 6
                },
                {
                    commentId: uuidv4(),
                    commentName: "Jim Lee",
                    commentPic: "https://picsum.photos/id/312/692/460",
                    commentDesc: "Thank you for writing this. I am trying to find more ideas and resources to help me write better content. I enjoyed your article and look forward to reading more from you. Thanks again.",
                    commentArrs: [],
                    commentDate: 3  ,
                    commentLike: 3
                },
                {
                    commentId: uuidv4(),
                    commentName: "ParKello",
                    commentPic: "https://picsum.photos/id/353/692/460",
                    commentDesc: "Not everything will suit everyone. ",
                    commentArrs: [],
                    commentDate: 4  ,
                    commentLike: 1
                },
                {
                    commentId: uuidv4(),
                    commentName: "Advisors Network",
                    commentPic: "https://picsum.photos/id/334/692/460",
                    commentDesc: "Thank for the ideas.",
                    commentArrs: [],
                    commentDate: 1  ,
                    commentLike: 12
                },
            ]
        }
    },
    //Add more topic

]
export default data