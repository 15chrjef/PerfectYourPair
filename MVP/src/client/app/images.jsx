import React from 'react';

var images = [
  {
    name: 'Travis Wood',
    bio: 'I just recently got back from Spain, where I was living and teaching English for two years. Before that, I taught high school physics in Detroit. Before that, I was studying cognitive science and business in San Diego.',
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156ed42d9962c95b&attid=0.3&disp=emb&realattid=ii_ismdpkwc0_156ed2fbc33f4e93&attbid=ANGjdJ8VmoPh5pMe1fsyYz2mabDOJsdPPBvL6iKN2bXIpR1J1ego4gaNM5WaaF9QplWw2Y4ILlmBITpWIshUrYf2OxTcoR5FhDfSIyi3GyQRP27lHXDUDnjf5AF5UM8&sz=w856-h926&ats=1476746694419&rm=156ed42d9962c95b&zw&atsh=1',
    style: 'scribe'  
  },
  {
    name: 'Stephen Cefali',
    bio: "For the past three years I've been working for a semiconductor company doing verification on mixed signal chips (WiFi and BT technologies). So basically working as an electrical engineer. Before that I attended Harvey Mudd college (class of '13) in SoCal where I majored in engineering.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156ed567f3f37544&attid=0.1&disp=emb&realattid=ii_ismf7d1k5_156ed561f21124b5&attbid=ANGjdJ_WXsC1zFzwrh6DLOHkSh2EeZh0Qsx3CmKT7mTL8jffS-3vlUMxEG8Ggi1gLCUwAikupHQVDBmDeX186h0RtaeBEaJxby-1vy81O57YFIie6bo4F6y0ZxxK3Hs&sz=w828-h854&ats=1476746694434&rm=156ed567f3f37544&zw&atsh=1',
    style: 'scribe'  
  },
  {
    name: 'Jeff Christian',
    bio: "I worked for two tech startups doing everything from User Acquisition to Sales. Before that I attempted, and failed, to start a startup, and was a product manager for outsourced web development projects before that.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156ed72d7d90cdb2&attid=0.1&disp=emb&realattid=ii_ismg9zw40_156ed71871d36592&attbid=ANGjdJ90Z-u4UNTbsCxq3GDBqdL-KzpIdRyskCqOh0-OH9_1XX-zviGo-vTnDvgigyXvO8xmHIyKfbMlEC5BU7TODaOW56KPun_mgZeKJx7-VABrUw5qnzTP-pduA_k&sz=w728-h1124&ats=1476746694460&rm=156ed72d7d90cdb2&zw&atsh=1',
    style: 'scribe'  
  },
  {
    name: 'Robin Kuehn',
    bio: "Since graduating college, I've been teaching in a variety of settings. Two years ago I taught 8th grade on a Native American Reservation in New Mexico and more recently I taught 2nd grade at an all-girls school here in the city.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156f14528c15a6f4&attid=0.2&disp=emb&realattid=ii_isnigzyb0_156f14468c2632be&attbid=ANGjdJ_TmsoTPm3NdsT8fVu1HDMwELSjrZIZa-Fb21UnUtQBkcTQv9Lm0cE4iOrHbbmYuWM-k9KfjKcBaShQ5atpQEQfh4DkelP-AZ2vS83ujTP63EDI49e38TF213o&sz=w634-h844&ats=1476746694466&rm=156f14528c15a6f4&zw&atsh=1',
    style: 'scribe'  
  },
  {
    name: 'Vien Tang',
    bio: "The last 10 years I was at an art and design university helping people get started in graduate school. Along the way, I wore many hats from career counseling, to financial planner, to technical support, to sales, to admin, to whatever needed to get done.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156f1a7b108647dd&attid=0.1&disp=emb&realattid=ii_isnmcap70_156f1a794d298a6b&attbid=ANGjdJ-h2VCyMWg3ZMeXQ1eSyrUkWduZtE7uU9j2UwXFu0VRQyTPItvlSVTiRezKauTPFUPgm8t67CZGfmnObehE7aQtP71kCv-9Aw_bi2_QmWCJMB1W2yYjtvffQv8&sz=w964-h724&ats=1476748681745&rm=156f1a7b108647dd&zw&atsh=1',
    style: 'scribe'  
  },
  {
    name: 'Miles Smith',
    bio: "Before Hack Reactor I was working in Financial Services, helping families set up 401ks, Annuities, Life Insurance, and other forms of investment products. After working in such an archaic industry I realized I wanted to work somewhere where my mind was challenged on a daily basis and the work constantly changes which is what led me to Software Engineering.",
    picture: 'https://files.slack.com/files-pri/T17PETGBH-F2R0B12PL/img_0599.jpg',
    style: 'conjurer'  
  },
  {
    name: 'Matthew Vincent',
    bio: "I'm super interested in UI/UX development and making computers easier and more fun to interact with. My current favorite UIs are the Google Inbox app (which I'm currently using) and HBO go for Apple TV. I would love to build an Apple TV App.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156f6adde3ebb190&attid=0.1&disp=emb&realattid=156f6abe6b0728ad52b2&attbid=ANGjdJ91h7haJ7PjH4YzEzvlGIGa5U33FvRdycaFrb0PK4rXdjbWRIaW20xv7vmRI-sENXiP6DyMIz4VPNjN-MVpJwU68r37cALcuihkSxwdNqRChiJfldKZmtJiSDU&sz=s0-l75-ft&ats=1476748681789&rm=156f6adde3ebb190&zw&atsh=1',
    style: 'scribe'  
  },
  {
    name: 'Dylan Larrabee',
    bio: "Ive been working and pursuing a Bachelor's of Science in Biology for the last five years and recently graduated! I got the opportunity to be apart of some research and teaching internships that let me test out some different career paths. I found out a lot about what sorts of things I get really excited about.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156f823d7c6db3c5&attid=0.3&disp=emb&realattid=ii_ispcxqsv0_156f7ebd0722ec3d&attbid=ANGjdJ-KOSDvBNAcKvAPef9whKAedvpWS1Yf_7PcAnebc8qDjNWsAWmCPETrGULm3c7Lh8tRoM2DeM95Sg-Rn4SVdciGfJxIIuj2IithsqWWW-quEn6Dp3NJga3W458&sz=w824-h944&ats=1476748681807&rm=156f823d7c6db3c5&zw&atsh=1',
    style: 'scribe'  
  },
  {
    name: 'Guy Thomas',
    bio: "I studied finance, expecting to become an investment banker. A lucky turn of events led me to work as a consultant at IBM helping our clients to use our software.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156f86e55d738038&attid=0.2&disp=emb&realattid=ii_156f7b448ee818c6&attbid=ANGjdJ8cbDzPeKL0eH68RaPtBwFPwJ_ohDoOl-LiRURrDdLA5wmrGB5FPqPKArVE2qSlGzCj58oHcuNXdRUFS2XZM1WLLluxlbMHY4UUo8ntyfega0sC85O6nWd1TDg&sz=w612-h990&ats=1476748681814&rm=156f86e55d738038&zw&atsh=1',
    style: 'scribe'  
  },
  {
    name: 'MJ',
    bio: "I was working in Citibank's transaction bank. I was rotating through different functions and spent some time in sales, product management and project management. Before that, I studied Economics and Business (Finance major) in college.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156f9d26c22b235c&attid=0.1&disp=emb&realattid=ii_ispu2ubh2_156f9a32cf2aabba&attbid=ANGjdJ9nk-OADTu1-Dl2O90Wy7SBWzKMsR46s6NRuCog6-whJolqX_eRmnJpZ7hNpFhmf3Lwduc3rWIQVtfbktvAerxI_PHiKYakyc_Gr2TAIUqKfz2hDTerJx-E6FU&sz=w942-h942&ats=1476748681820&rm=156f9d26c22b235c&zw&atsh=1',
    style: 'scribe'  
  },
  {
    name: 'Cheney Mao',
    bio: "I think I took too before sending the email, so my image got messed up. I'll try again as well.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156fa01f9670c473&attid=0.2&disp=emb&realattid=ii_ispxqgkk0_156fa01005a661cf&attbid=ANGjdJ_EaogFL4dFmGTpfnI7NJQtN_Jj5o49WVUBvlOhvXO6XmvXEoHVhVHm0TcN1O2dALOETyN-sAuY2GA6sxIThow4zR1z3udUOdVqldBLyI_4f4U4knKXiIKRpJ8&sz=w764-h1124&ats=1476748681825&rm=156fa01f9670c473&zw&atsh=1',
    style: 'scribe'  
  },
  {
    name: 'Wallace Luk',
    bio: "Just last year, I left college with a B.S. in Computer Science - in search of a job in the tech industry. Needless to say, it didn't go very well. I did manage to teach myself a bunch of useless things during the hunt - a bit of Japanese, some Photoshop, piano basics, how to do a proper squat, pretty much anything but coding. Hoping now's the time to make myself pay for it. Currently (and sadly?) growing complacent with a job at Walgreens",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156fa2fb9c45d47d&attid=0.1&disp=emb&realattid=ii_ispzhdas3_156fa2d9a998b2c6&attbid=ANGjdJ-tlz_G19BjBDnsVXSTWCDCn-QRGdv1y2Ab0UHoss53ioCL7HPT4VgKMDvE-nAANhReU-ciZ_iJt9ntoLpDX3r8Q6uGHc-aKkdkOwGfsQpHOTVnh3vv4RsQEA0&sz=w844-h1124&ats=1476748681828&rm=156fa2fb9c45d47d&zw&atsh=1',
    style: 'scribe'  
  },
  {
    name: 'Nick Englund',
    bio: "I studied chemical engineering at UC Berkeley. After I graduated, I did a research fellowship simulating hydrogen fuel cells at the Lawrence Berkeley National Labs, worked for a lithium ion battery startup, and then worked as a process engineer for a photochemical machining company.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156fb133cdbe85ad&attid=0.1.1&disp=emb&attbid=ANGjdJ9ZRp7iCK7y25KkPLR6ouJHxpbZXiGBbGnuqzlp6IDO0xDY8V2pmOAni5e0VN5Eyw2vUuVe5g59nycLRA3-aaESllz7RUsLNj75e6S0qu72JCY69h8WvmYx64w&sz=w644-h964&ats=1476748681832&rm=156fb133cdbe85ad&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Lucas Becker',
    bio: "I studied Computer Science at Carnegie Mellon University for two years until I could no longer afford it (60k a semester is a lot, man!) Since then I spent a summer as a Teacher's Assistant for a company called Digital Media Academy, teaching teenagers to code Python and Java. After that I worked at an art house movie theater slinging popcorn and movie tickets, which was great because I got free movie tickets and popcorn. ",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156fc181fae36ab1&attid=0.2&disp=emb&realattid=ii_isqi235m0_156fc09b33093900&attbid=ANGjdJ-Rl2us31AwzjrZNk6T50E5dGhzK0jDTDE7z5gWpbfhiki6VA8g49CEm8ar29ReICcqPSO76dhoLh9qA-q9Zyv7nBov6e_6VdxRUy7Fp-LbcG1jreX_woFTIRs&sz=w920-h920&ats=1476748681842&rm=156fc181fae36ab1&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Charlotte Willens',
    bio: "I studied Math at Pomona College is SoCal. After that I worked as a data analyst for 2 years, then spent the last year traveling in Europe, Asia, and New Zealand. ",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156fd2afa82941b0&attid=0.3&disp=emb&realattid=ii_156fd26b6a4c129f&attbid=ANGjdJ_HDQZkf5MOXIht_zo19SJvXyHErsDmUK9m3zfGNYMxnQAhRsZxQKFlS7BzfbOQ1ynAbB1G29FpwGPRMi-wskLwLofPrfrR_Ixqiiwst8Og7-QbQQUnocdNqRQ&sz=w496-h550&ats=1476748681852&rm=156fd2afa82941b0&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Karina Kinaman',
    bio: "Graduated from the University of Virginia in 2013, road tripped across the country and spent a year in San Jose serving with the AmeriCorps program City Year, then moved to Thailand to teach English for a year, did a bunch of traveling through SE Asia and New Zealand, and then moved to SF (almost a year ago). This past year I've been traveling the country visiting friends and family, working at Sports Basement in between trips, pursuing my hobbies (climbing, yoga, running), and thoroughly enjoying the non-office-job life.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=156fde3c88ed2c6b&attid=0.2&disp=emb&realattid=ii_isr0i2jp0_156fde26b7bc0906&attbid=ANGjdJ_ZvbyJSH6LZRgVXs_Hqrqg3sF1o3RLf_j5jAoMvrwapDFAYyF-ozkEjbE0kcWoJATayloGjghsn42bZFtSC5Lnjrtw-Frz6647qIGq8jloJzx8L3g9xQgNGuw&sz=w1002-h908&ats=1476748681867&rm=156fde3c88ed2c6b&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Ben Hesseldieck',
    bio: "I earned a Bachelor degree in General Management from EBS University (Germany) including a semester abroad in Shanghai, but already realized in my 2nd year that I am actually more a builder than a manager. Before graduation I realized that I want to become a Software Engineer, so I decided to pursue a Master degree in Computer Science at the Humboldt University Berlin, which is what I am currently doing, but I quickly found out that Computer Science studies rather make you a good theorist than a good programmer/engineer .",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=15700b958c8611c7&attid=0.1.1&disp=emb&attbid=ANGjdJ9YiZVryzJs10RjRvlIeQAY_vjsgr_uilH7hnPdmGEuMt0pgKaZ4dEcmCgw-Q9HOKA4aIn86entIXmAJLLF4IRo01mUWeAwl0y1b8Dh85YxOdt7ysFXX__QgeA&sz=w960-h640&ats=1476748681875&rm=15700b958c8611c7&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Jesse Mavi',
    bio: "Taking a long break where I learned to code for fun and then decided to go to a bootcamp. Before that I was working on a startup in Chicago called Zealous Good which connects people looking to donate their excess items to local non",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=157018a11887fda2&attid=0.3&disp=emb&realattid=ii_iss0wdl40_15701873e7ec65d3&attbid=ANGjdJ-eocCWE_rRa4Dn7ioak5xWfN6TLv1vUoF-K9b1tNyXe1kXjm6ZrLqxOIIoxoBdeg9jPj655nvSbkaokeuvumIFMAVY4t8KsfFigdokRWJV4GXKRpVNDJVuqq8&sz=w336-h252&ats=1476748681885&rm=157018a11887fda2&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Sheng Yang',
    bio: "I worked as a research assistant in a lab in San Jose. My work focused mainly on optical-MEMS sensor design and MEMS fabrication. I found the work fun and challenging, but after four years of immersion, I decided to go for a career change. Having always liked logics and a personal interest in doing more programming, I decided to apply for Hack Reactor.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=15701c35e72b3d6d&attid=0.1&disp=emb&realattid=ii_157019c723caa35a&attbid=ANGjdJ9tYYVb5wZYe0gekwt-mAeX75Xqd2KHRXXWXsI4pkxsWDh8Y41ADzaw2AAQM8bnkFqmimx5Dy1u4SXl-VTSGAzj6gnyWdphlEBWAH2gj5aSSuTuyv3aCtEuXL8&sz=w910-h1036&ats=1476748681892&rm=15701c35e72b3d6d&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Amad Khan',
    bio: "I was studying Chemical Engineering at the University of Waterloo in Canada, recently graduated",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=157023eb53497e52&attid=0.1&disp=emb&realattid=ii_157023cf8bcb10c9&attbid=ANGjdJ-4rAiOmoy6b5SRK31LXKii5YnjjHO-77BUY2IN1XfZ4fWtu4EakGEWD-9itqfzJjeVYoeIV_0JRVUH3IROhay6gYIvo2pP6DQBJjAud0wdGeuFNsfS6aUjL7c&sz=w1006-h1034&ats=1476748681899&rm=157023eb53497e52&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Robbie Gifford',
    bio: "I graduated about a year ago with a BA from the University of Oregon. My major was social science, minor was creative writing. After school I worked to negotiate contract work with a ride service at UO. After months of negotiations and prototyping (in RoR), I decided to walk away from a pending deal--approvals and financing issues were just taking to long to be worth while. Shortly after that I took up handyman work.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=15702677eed477cd&attid=0.1&disp=emb&realattid=ii_15701ff20d55dff2&attbid=ANGjdJ8OYDUyKkSpoAlJD7rTrOY9oOFjAqyWadCtlnZuniay2ty12ce3Z_QZ4HupUVMcNgr8enIXd5L05Id0tu33DOqpnNpdntgoOJ5RLBv-QTtCC005dfu6-jzucAU&sz=w630-h944&ats=1476748681908&rm=15702677eed477cd&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Sherman Chen',
    bio: "Until little over a year ago I was working at a start up e-commerce company selling consumer electronics, I did anything and everything imaginable including customer relations, database management, packing and shipping the actual wares, you name it!. Decided that it just was not the life I wanted or particularly enjoyed, so I left and decided to go back to studying for something that I do actually enjoy and maybe hopefully can do for a living later on (right?)",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=15702bf77b4e6b4c&attid=0.4&disp=emb&realattid=ii_issd0e861_15702bda8a542b1d&attbid=ANGjdJ_NvSF3l_yISUj1JDEfYGQ5nLKAVIcMsHkaVLeYSSziqjF_WnujX1S6mYlHxZygyRC8DexnEI6EYeSMDVJV86C1_gGrYoXIsF_kn8ROn7QmICV52FPFOYsqo_Y&sz=w514-h686&ats=1476748681928&rm=15702bf77b4e6b4c&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Tim Zeng',
    bio: "I had an accounting degree and worked for an accounting consulting company for about 2 years. I am excited about Hack Reactor and a career change after the program!",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=15702d962faf50f9&attid=0.3&disp=emb&realattid=ii_15702d8b135aa73d&attbid=ANGjdJ8Xf9LDNAJL9DpSyJN_JmdXVIuh5diOsfJ7wKxd_fJqdjTpXUaGapaYVJ5PQDRbAk6ipLzu8JRy-mYgWRP6zIPsmKRBog8Us2lnfPPnp7yQMW2j0oVZ1GAp83s&sz=w398-h610&ats=1476748681942&rm=15702d962faf50f9&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Joseph Lee',
    bio: "I just graduated from UCLA with a degree in Political Science this past March. Did some soul-searching and decided to dive into the world of coding.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=157030b1c053a152&attid=0.1&disp=emb&realattid=ii_157030a23c52e9a7&attbid=ANGjdJ91bnC71PaKt0ESWUcPXT2WZaTGPCWm5CoBeXQlnnEElXFsqTbWIkWM4ACvwbdr-8J13XM-rcM60gbBArW7yaVnsgS6VapHLzgyFn6i4Ulc6GTW6g1kcjjv8GY&sz=w594-h896&ats=1476748681955&rm=157030b1c053a152&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Carlos Portillo',
    bio: "I studied International Relations & Global Business at USC and graduated in May '14. Since then I've worked mostly in finance and am currently a buyer at Toshiba America (this being my last week)",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=157033bcdcc6bfba&attid=0.2&disp=emb&realattid=ii_15703108332e7e2d&attbid=ANGjdJ9-axph-wrCrrKONPdXQ6ImKsF7CD3aghQ7I24-6ElVzvJTbhzM3anhGsbcGKQC33V4lyA8deCFI82kdphUFVem3aKwfz3UUeefH1OFVhAhbiVN6NWvcj76Ksc&sz=w844-h1124&ats=1476748681970&rm=157033bcdcc6bfba&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Manjula Manickababu',
    bio: "I was taking care of my kids and was tutoring precalc",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=157035276b3cbb3a&attid=0.6&disp=emb&realattid=ii_1570351a988494a8&attbid=ANGjdJ9Bewj0y0FvsflF_JMXYZ7mhOF3xghXUUBaEZIdZFPdfoI6CCd-D3lQvjbjegjBnxQlET3jLg77YctNJ8eeoDcr0ZuoGJEESpLxegcleu_xFE1j3aAAiynGllM&sz=w844-h1124&ats=1476748681985&rm=157035276b3cbb3a&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Kyle Chun',
    bio: "I attended UC Berkeley the last 4 years studying Applied Mathematics. ",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=157035eb7f3aeb7a&attid=0.1&disp=emb&realattid=ii_156ed8126963af2d&attbid=ANGjdJ-EeBraRmZpXG1S8bBhHcWIuuhAOa2M9Ija22R81LJrFNhy4BMbcECog4mBbwmsgcnP0J23mys_MuaqHB0kkMwwa5ChB8h-agsoFPqIp2KYsf1LJCty-CU3-oE&sz=w576-h562&ats=1476748682001&rm=157035eb7f3aeb7a&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Alec Maliwanag',
    bio: "I graduated school in 13' with a philosophy degree and spent the following year living on Buddhist monasteries in the U.S. and Thailand.  I wanted to stay abroad so I became an ESL Teacher and taught in Taiwan for a school year.  After a final back packing trip I moved to San Francisco and have been working for a tech company here for nine months.",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=1570584936a886e0&attid=0.2&disp=emb&realattid=ii_ist47iej0_1570576b12e5ebfc&attbid=ANGjdJ-EsPBGd3lchqdw-0edmNHLPbQAfx2OuFjExxF4WAkxaIHrnQKd2-xiLK369xY6aVZQglBrzu4NHmLqf4I2Q4DwuG8K4ZI-s9BVPWnj349P4OKxGhbOviNNY0A&sz=w1124-h966&ats=1476748682008&rm=1570584936a886e0&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Tim Garibaldi',
    bio: "I've been in SF for about 5 years now working in tech as a program and product manager at a few different places. ",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=15705cc3febdb8cb&attid=0.1&disp=emb&realattid=ii_ist7inq01_15705cb8500b0aac&attbid=ANGjdJ-yACYaBwhY8VY05KecRMik3vfsrCzK6y1q5u94400YBCRKi-2e8VPy6Oehg5Ysi3-8GoF7CDP0tHKiAFIKdn7Ytcimt50rBggggGuciGBlwNkyAxQ7gKvWIJ8&sz=w448-h448&ats=1476748682017&rm=15705cc3febdb8cb&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Jace Zhu',
    bio: "I graduated from UC Irvine with a BS in Business Information Management in 2012 (basically half CS half business). Afterwards I went to work in China as a programmer for about 8 months, because I have a lot of family members there and wanted to see how living in China is like. Then I had a bit of an existential crisis, came back to US and joined the Army for 3 years. I spent most of last year deployed in Europe for various training events, then earlier this year I decided I still wanted to do something related to tech, and Hack Reactor seemed like a good option to get back in the game. Honorably discharged on August 3rd. ",
    picture: 'https://lh5.googleusercontent.com/v_KDyX8D7m-cpRMUbtiJ7Z8eSQZyWqpeYttxiGM-Dz_X-jxH6ztKcSfdLOLkWbaKgd21wA=w2880-h1606',
    style: 'conjurer' 
  },
  {
    name: 'David Minehan',
    bio: "I started college majoring in Computer Science, but then I discovered the joys of writing.  More recently, however, I've rediscovered the joys of programming and also getting paid for my work. ",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=157073d9e39402ee&attid=0.0.1&disp=emb&realattid=ii_istkot740_157071d0fae526d6&attbid=ANGjdJ90pAKrpG-BlPqiSMcUCkEQau1K-pWcfc4tJoUlYg-FHNkuZ8Q4Me-hUrvWSNSBVAtuyirCPTg2Bh682UVKBWRiwkyAtqJsr-wT124ZZ0Uy6nR_itvOv65OG0c&sz=w1122-h842&ats=1476748682048&rm=157073d9e39402ee&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Erik Suddath',
    bio: "I spent my last summer at college working on the set of Burn Notice as a PA — herding around extras. After graduating, I bought a sailboat with 3 friends and sailed around the Caribbean for a bit. Then spent about 9 months completely gutting and remodeling a house in Colorado. More recently, living in Jacksonville, FL working for my Uncle’s business and Co-Founded a tech company that lets you book a move with local movers online. ",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=157077f1c84770f4&attid=0.1.1&disp=emb&attbid=ANGjdJ8z775ig-gVMXrjMgsAiSmZZQPrSrwKCZBwDpmsLHnpV8i2IMINrWYSw3eBDQPb3AxRvOtpCCkCj4oyDJTzEvcOJK4lKAyGE_BmxpeKPqhXU2nmqWbXVAjH3s8&sz=w1028-h962&ats=1476748682057&rm=157077f1c84770f4&zw&atsh=1',
    style: 'conjurer' 
  },
  {
    name: 'Andrew Lee',
    bio: "Before coming to the states I was living in doing working at mobile gaming company. After staying there for 1 year I decided to apply for Hack Reactor. For the last few months I have been staying in southern California. There I was helping my aunt setup an internal CMS for her company. ",
    picture: 'https://mail.google.com/mail/u/0/?ui=2&ik=d392a5471a&view=fimg&th=1570e1bde2abf24e&attid=0.1&disp=emb&realattid=ii_1570e18c93683ab3&attbid=ANGjdJ_KlODszhM01Vfm4BNWj9iB5Fkou1tWUhBkTvSVqgRVdFDxbBGeDQBuh4n004s-tXMY2ELieq95lwzyoE6kg_5b5DSmY9y5m_dv8kSJsT7qSqI-8hx6u7dBcOs&sz=w810-h1084&ats=1476748682068&rm=1570e1bde2abf24e&zw&atsh=1',
    style: 'conjurer' 
  }
];

export default images;