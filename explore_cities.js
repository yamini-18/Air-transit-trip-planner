const cities = {
    'India': ['Visakhapatnam', 'Hyderabad', 'Delhi', 'Bangalore', 'Mumbai'],
    'Singapore': ['Singapore City', 'Changi', 'Seletar'],
    'France': ['Paris', 'Marseille', 'Lyon'],
    'Japan': ['Tokyo', 'Osaka', 'Nagoya'],
    'Sri Lanka': ['Colombo', 'Galle', 'Bentota'],
    'USA': ['New York', 'Los Angeles', 'Chicago'],
    'Australia': ['Sydney', 'Melbourne', 'Brisbane']
  };

  const touristPlaces = {
    'Hyderabad': [
      { title: 'Charminar', image: 'https://lh3.googleusercontent.com/p/AF1QipNEhBrVxLTHb4CM3bzMbymPA1ILDadX-9Db93Y=s1360-w1360-h1020', locationLink: 'https://www.google.com/maps/d/viewer?mid=13qxyaFoYAcmZhghhKMIn7DZF1Aw&hl=en_US&ll=17.361550000000012%2C78.47475000000001&z=12' },
      { title: 'Birla Mandir', image: 'https://d3k1i85mml78tf.cloudfront.net/Blogs/1650298900679_post_image_1.jpg', locationLink: 'https://www.google.com/maps/place/Birla+Mandir/@17.4062367,78.4690601,15z/data=!4m6!3m5!1s0x3bcb975dd124c005:0x59439ffad6e0298e!8m2!3d17.4062367!4d78.4690601!16s%2Fm%2F0283l9v?entry=ttu' },
      { title: 'Salar Jung Museum', image: 'https://lh3.googleusercontent.com/p/AF1QipPLU96sO4j6pvGYahA23tg6ElSGoI5zFH4-yDoI=s1360-w1360-h1020', locationLink: 'https://www.google.com/maps/place/Salar+Jung+Museum/@17.3716084,78.4802439,15z/data=!4m6!3m5!1s0x3bcb9787e263d7bb:0x353b934b9b69a041!8m2!3d17.3716084!4d78.4802439!16zL20vMDNfMHZm?entry=ttu' },
      { title: 'Golconda Fort', image: 'https://subrata498460531.files.wordpress.com/2021/06/img_20210608_190656-edited.jpg', locationLink: 'https://www.google.com/maps/place/Golconda+Fort/@17.383309,78.4010528,15z/data=!4m6!3m5!1s0x3bcb968ea6aea98f:0x6b76ecdfd65a335a!8m2!3d17.383309!4d78.4010528!16zL20vMDdtd2p5?entry=ttu' },
      { title: 'Taj Falaknuma Palace', image: 'https://lh3.googleusercontent.com/p/AF1QipPusMB05JoDir51ZV1ibAB0gK05pB4DhlypLJAf=s1360-w1360-h1020', locationLink: 'https://www.google.com/maps/place/Taj+Falaknuma+Palace/@17.3314792,78.4674647,15z/data=!4m9!3m8!1s0x3bcbbd5654172a41:0xd3dbb0c22420002e!5m2!4m1!1i2!8m2!3d17.3314792!4d78.4674647!16s%2Fm%2F0277x86?entry=ttu' },
    ],
    'Visakhapatnam': [
      { title: 'Rushikonda Beach', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a5/Rushikonda_beach_view_001.jpg', locationLink: 'https://www.google.com/maps/place/Rushikonda+Beach/@17.7831114,83.3858596,17z/data=!3m1!4b1!4m6!3m5!1s0x3a395afb375cec97:0xc0775a251e45f1ed!8m2!3d17.7825201!4d83.3851154!16s%2Fg%2F11bbqqfhqt?entry=ttu' },
      { title: 'Kambalakonda Wildlife Sanctuary', image: 'https://vizagtourism.org.in/images/places-to-visit/header/kambalakonda-wildlife-sanctuary-vizag-tourism-entry-fee-timings-holidays-reviews-header.jpg', locationLink: 'https://www.google.com/maps/place/Kambalakonda+Wildlife+Sanctuary/@17.7783843,83.3348916,15z/data=!4m6!3m5!1s0x3a395c3aaaacd46b:0x569ff813fc544485!8m2!3d17.7783843!4d83.3348916!16s%2Fm%2F03gvs93?entry=ttu' },
      { title: 'VMRDA INS Kursura Submarine Museum', image: 'https://yometro.com/images/places/ins-kurusura-submarine-museum.jpg', locationLink: 'https://www.google.com/maps/place/VMRDA+INS+Kursura+Submarine+Museum/@17.7172461,83.3300952,15z/data=!4m6!3m5!1s0x3a394366bf4c70eb:0x954398b1ff5d09f2!8m2!3d17.7172461!4d83.3300952!16s%2Fm%2F076ybs3?entry=ttu' },
      { title: 'Dolphin s Nose Lighthouse', image: 'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1162380343_20191205102132.jpg', locationLink: "https://www.google.com/maps/place/Dolphin's+Nose+Lighthouse/@17.676469,83.2925877,15z/data=!4m6!3m5!1s0x3a394317a3792365:0x3a507428c1c289f!8m2!3d17.676469!4d83.2925877!16s%2Fg%2F11f04dtszs?entry=ttu" },
      { title: 'Yarada Beach', image: 'https://th-i.thgim.com/public/news/cities/Visakhapatnam/kv5tle/article26503172.ece/alternates/LANDSCAPE_1200/12VZ2YARADABEACH', locationLink: 'https://www.google.com/maps/place/Yarada+Beach/@17.657866,83.2731065,15z/data=!3m1!4b1!4m6!3m5!1s0x3a39421da4370733:0xa4ef41bc1f76ebe8!8m2!3d17.6549368!4d83.26923!16s%2Fm%2F0113kkd9?entry=ttu' }, 
    ],
    'Delhi': [
      { title: 'Indian Gate', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/a9/fb.jpg', locationLink: 'https://www.google.com/maps/place/India+Gate/@28.612912,77.2295097,15z/data=!4m6!3m5!1s0x390ce2daa9eb4d0b:0x717971125923e5d!8m2!3d28.612912!4d77.2295097!16zL20vMDM1bWMz?entry=ttu' },
      { title: 'Lotus Temple', image: 'https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_405,q_auto,w_750/v1684320440/bbj/t86xpr9yyzdbcqhhms5n.jpg', locationLink: 'https://www.google.com/maps/place/Lotus+Temple/@28.553492,77.2588264,15z/data=!4m6!3m5!1s0x390ce3c16e028cd1:0x653beb1ee85ec67a!8m2!3d28.553492!4d77.2588264!16s%2Fm%2F03bx9s0?entry=ttu' },
      { title: 'Akshardham', image: 'https://media.easemytrip.com/media/Blog/India/637116640324801740/637116640324801740ptZ4Mc.jpg', locationLink: 'https://www.google.com/maps/place/Akshardham/@28.6126735,77.2772619,15z/data=!4m6!3m5!1s0x390ce35b9975b1fb:0x69a09f265ef3b22a!8m2!3d28.6126735!4d77.2772619!16zL20vMDkxbmYx?entry=ttu' },
      { title: 'Jama Masjid', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Jama_Masjid_-_In_the_Noon.jpg/450px-Jama_Masjid_-_In_the_Noon.jpg', locationLink: 'https://www.google.com/maps/place/Jama+Masjid/@28.6506792,77.2334421,15z/data=!4m6!3m5!1s0x390cfd18df89b215:0xdd57369e29bf9d96!8m2!3d28.6506792!4d77.2334421!16zL20vMDR5emo1?entry=ttu' },
      { title: 'Red Fort', image: 'https://www.deccanodysseytrains.com/blog/wp-content/uploads/2018/05/Red_Fort-Delhi-India.jpg', locationLink: 'https://www.google.com/maps/place/Red+Fort/@28.6561592,77.2410203,15z/data=!4m6!3m5!1s0x390cfce26ec085ef:0x441e32f4fa5002fb!8m2!3d28.6561592!4d77.2410203!16zL20vMDVteXN2?entry=ttu' },
    ],
    'Bangalore': [
        { title: 'Bengaluru Palace', image: 'https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Bangalore-Palace_1400.jpg', locationLink: 'https://www.google.com/maps/place/Bengaluru+Palace/@13.0035068,77.5890953,15z/data=!4m6!3m5!1s0x3bae1649294a5637:0xb1f8b77e331512cf!8m2!3d13.0035068!4d77.5890953!16s%2Fm%2F02pf96d?entry=ttu' },
        { title: 'ISKCON temple Bangalore', image: 'https://www.astroved.com/astropedia/assets/images/temples/Iskcon-bengalore.jpg', locationLink: 'https://www.google.com/maps/place/ISKCON+temple+Bangalore/@13.0098328,77.5510964,15z/data=!4m6!3m5!1s0x3bae3ded0b360e07:0x7a7fb24a41a6b2b3!8m2!3d13.0098328!4d77.5510964!16s%2Fm%2F0g9x5qd?entry=ttu' },
        { title: 'St. Marys Basilica', image: 'https://bangaloretourism.in/images/v2/places-to-visit/st-marys-basilica-bangalore/st-marys-basilica-bangalore-bangalore-holidays-closed-on-timings-bangalore-tourism-cr-mbell1975-02.jpg', locationLink: "https://www.google.com/maps/place/St.+Mary's+Basilica,+Bengaluru/@12.9843925,77.6044189,15z/data=!4m2!3m1!1s0x0:0xc492b89e9704c3c2?sa=X&ved=2ahUKEwiLiMKzq_SDAxUETmwGHcgMBagQ_BJ6BAgLEAA" },
        { title: 'Bannerghatta Biological Park', image: 'https://www.hlimg.com/images/things2do/738X538/10_1523506625t.jpg?w=600&dpr=1.5', locationLink: 'https://www.google.com/maps/place/Bannerghatta+Biological+Park/@12.8010043,77.5775256,15z/data=!4m2!3m1!1s0x0:0x96b24101b2a3dcd9?sa=X&ved=2ahUKEwjX7IGfrPSDAxXdcWwGHXAhAVcQ_BJ6BAgJEAA' },
        { title: 'Lalbagh Botanical Garden', image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/lalbagh_flower_show_1200x768.jpeg?VersionId=sUU_ka52LsJ4wD8CihXglmIllZIWPEG9&size=690:388', locationLink: 'https://www.google.com/maps/place/Lalbagh+Botanical+Garden/@12.949133,77.5773959,14z/data=!4m6!3m5!1s0x3bae15c191f2d31d:0x8e110b99df2fbe22!8m2!3d12.9507432!4d77.5847773!16zL20vMDUxd3A0?entry=ttu' },
      ],
      'Mumbai': [
        { title: 'Chhatrapati Shivaji Maharaj Terminus', image: 'https://images.livemint.com/img/2020/08/24/600x338/PTI01-06-2020_000063B_1591021508329_1598273046827.jpg', locationLink: 'https://www.google.com/maps/place/Chhatrapati+Shivaji+Maharaj+Terminus/@18.9398446,72.8354475,15z/data=!4m6!3m5!1s0x3be7ce27b8aa3bdf:0x21434b0703218d1b!8m2!3d18.9398446!4d72.8354475!16zL20vMDFxNnhw?entry=ttu' },
        { title: 'Elephanta Caves', image: 'https://www.fabhotels.com/blog/wp-content/uploads/2018/08/1400x600-33.jpg', locationLink: 'https://www.google.com/maps/place/Elephanta+Caves/@18.9633474,72.9314864,15z/data=!4m2!3m1!1s0x0:0xf4ab181b1aaef53f?sa=X&ved=2ahUKEwiM8IeMrvSDAxUMTWcHHahWDGwQ_BJ6BAgKEAA' },
        { title: 'Marine Drive', image: 'https://scontent-hyd1-1.xx.fbcdn.net/v/t39.30808-6/300821014_487533320043758_8544718371909909589_n.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=783fdb&_nc_ohc=xTrukFVPcKMAX9BqxiT&_nc_ht=scontent-hyd1-1.xx&oh=00_AfAdm6zFprKx6NVU4F2LFCpeIe5xe_T5XRECIOTWLPEpMg&oe=65B48327', locationLink: 'https://www.google.com/maps/place/Marine+Dr,+Mumbai/data=!4m2!3m1!1s0x3be7d1e25ee8439d:0x5acd924f2726ad2b?sa=X&ved=2ahUKEwjRmYvHrvSDAxV6SGwGHVUOByMQ8gF6BAhhEAA' },
        { title: 'Jehangir Art Gallery', image: 'https://www.mtdc.co.in/wp-content/uploads/2020/01/Jehangir-Art-Gallery-Amazing-Maharashtra.jpg', locationLink: 'https://www.google.com/maps/place/Jehangir+Art+Gallery/@18.9273983,72.8316856,15z/data=!4m2!3m1!1s0x0:0x760bf8abce5639f6?sa=X&ved=2ahUKEwjn-u78rvSDAxXzUGwGHUEDD0oQ_BJ6BAgKEAA' },
        { title: 'EsselWorld', image: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/71/ae/1f.jpg', locationLink: 'https://www.google.com/maps/place/EsselWorld/@19.231546,72.8050577,15z/data=!4m6!3m5!1s0x3be7b411184f63b1:0xc4daa22087d4f46e!8m2!3d19.231546!4d72.8050577!16s%2Fg%2F11clt0bj55?entry=ttu' },
      ],
      'Singapore City': [
        { title: 'National Orchid Garden', image: 'https://c1.staticflickr.com/2/1659/24618687070_cf518e66c8_h.jpg', locationLink: 'https://www.google.com/maps/place/National+Orchid+Garden/@1.3116238,103.814859,15z/data=!4m2!3m1!1s0x0:0x64304757a7e786aa?sa=X&ved=2ahUKEwjTnOrF1viDAxV8SmwGHQajDiEQ_BJ6BAhdEAA' },
        { title: 'Marina Bay', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Marina_Bay_Sands_in_the_evening_-_20101120.jpg/390px-Marina_Bay_Sands_in_the_evening_-_20101120.jpg', locationLink: 'https://www.google.com/maps/place/Marina+Bay+Sands+Singapore/@1.2837575,103.8591065,15z/data=!4m2!3m1!1s0x0:0x26c9afefa555dd7?sa=X&ved=2ahUKEwia5aCI1_iDAxU5kq8BHafdCZ4Q_BJ6BAgSEAA' },
        { title: 'Chinatown', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/73/65/d0/photo9jpg.jpg?w=1400&h=-1&s=1', locationLink: 'https://www.google.com/maps/place/Chinatown,+Singapore/@1.2805072,103.8451745,16z/data=!3m1!4b1!4m6!3m5!1s0x31da1972a27568e3:0xbbc2a66a543ebb05!8m2!3d1.2814942!4d103.8448202!16zL20vMDRiMnps?entry=ttu' },
        { title: 'Cloud Forest', image: 'https://curlytales.com/wp-content/uploads/2019/02/cloud-forest.jpeg', locationLink: 'https://www.google.com/maps/place/Cloud+Forest/@1.2838677,103.8660024,15z/data=!4m2!3m1!1s0x0:0x8d586ee8444e429?sa=X&ved=2ahUKEwi-m7fg1_iDAxUgS2cHHe8PAhMQ_BJ6BAgQEAA' },
        { title: 'Tourist Place 5', image: 'https://www.accreditloan.com/wp-content/uploads/2023/11/things-to-do-in-singapore-botanic-gardens.png.webp', locationLink: 'https://www.google.com/maps/place/Singapore+Botanic+Gardens/@1.3138397,103.8159136,15z/data=!4m6!3m5!1s0x31da1a1c7ddb60bd:0xeadf14903ad3d980!8m2!3d1.3138397!4d103.8159136!16zL20vMDF2ZHg1?entry=ttu' },
      ],
      'Changi': [
        { title: 'Changi Boardwalk', image: 'https://lh3.googleusercontent.com/p/AF1QipNDd77C_p0bh3X61wdur3iCXO5lfmHhEFhQlz4U=s1360-w1360-h1020', locationLink: 'https://www.google.com/maps/place/Changi+Boardwalk/@1.3917134,103.9758697,15z/data=!4m6!3m5!1s0x31da3d264cf0be47:0x651b181c880d9b28!8m2!3d1.3917134!4d103.9758697!16zL20vMGR6bXlj?entry=ttu' },
        { title: 'Bay Park Connector', image: 'https://www.littlestepsasia.com/wp-content/uploads/2022/02/Changi-Bay-Park-Connector.jpg', locationLink: 'https://www.google.com/maps/place/Changi+Bay+Park+Connector/@1.3708998,104.0051413,15z/data=!4m6!3m5!1s0x31da3d9d9c69bdfb:0xedb3c0d975ad5a4e!8m2!3d1.3708998!4d104.0051413!16s%2Fg%2F11snxdh7qg?entry=ttu' },
        { title: 'Jurassic Mile', image: 'https://media1.thrillophilia.com/filestore/wyidf2gib3oydi73w32d3nh8evhv_shutterstock_2101009099.jpg?w=360&dpr=1.5', locationLink: 'https://www.google.com/maps/place/Changi+Jurassic+Mile/@1.3348184,103.9835053,15z/data=!4m6!3m5!1s0x31da3daa352879d9:0x4e6ccde46b519f6a!8m2!3d1.3348184!4d103.9835053!16s%2Fg%2F11jx0s6c79?entry=ttu' },
        { title: 'Sri Sivan Temple', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Sri_Sivan_Temple%2C_Singapore_%285461588699%29.jpg/330px-Sri_Sivan_Temple%2C_Singapore_%285461588699%29.jpg', locationLink: 'https://www.google.com/maps/place/Sri+Sivan+Temple/@1.318443,103.8887339,15z/data=!4m6!3m5!1s0x31da1822e3838ecf:0x65171ba9c8a5604f!8m2!3d1.318443!4d103.8887339!16s%2Fm%2F0bs2nhr?entry=ttu' },
      ],
      'Seletar': [
        { title: 'Gardens by the Bay', image: 'https://planetofhotels.com/sites/default/files/roshcha_sverhderevev.jpg', locationLink: 'https://www.google.com/maps/place/Gardens+by+the+Bay/@1.2815683,103.8636132,15z/data=!4m2!3m1!1s0x0:0x62099677b59fca76?sa=X&ved=2ahUKEwj9lOmk0viDAxVOT2wGHcGYC-0Q_BJ6BAgREAA' },
        { title: 'Universal Studios Singapore', image: 'https://d1i3enf1i5tb1f.cloudfront.net/Tour-Images/false-4686/dinosure-park-universal-studio.jpg', locationLink: 'https://www.google.com/maps/place/Universal+Studios+Singapore/@1.2540421,103.8238084,15z/data=!4m6!3m5!1s0x31da1955a615a343:0x3094037d34e6529f!8m2!3d1.2540421!4d103.8238084!16s%2Fm%2F026_mw1?entry=ttu' },
        { title: 'Singapore Zoo', image: 'https://static2.tripoto.com/media/filter/tst/img/OgData/1518596916_screen_shot_2018_02_14_at_1_58_00_pm.png', locationLink: 'https://www.google.com/maps/place/Singapore+Zoo/@1.4043485,103.793023,15z/data=!4m2!3m1!1s0x0:0xb414fac8a43b1b91?sa=X&ved=2ahUKEwiTk7qQ0_iDAxW9bWwGHZbPD_8Q_BJ6BAgSEAA' },
        { title: 'Clarke Quay', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKJ1m19SVGoJkbbFxW5l7zKcQrRDpPcQf4lAJZ6K5VgdmOwfaVfhJFwDRMsngTqqe9YDM&usqp=CAU', locationLink: 'https://www.google.com/maps/place/Clarke+Quay/@1.2906024,103.8464742,15z/data=!4m2!3m1!1s0x0:0x20e5acd1e8ccf02?sa=X&ved=2ahUKEwjjzYzX0_iDAxUvTmwGHT6oB1EQ_BJ6BAgPEAA' },
        { title: 'Seletar Country Club', image: 'https://www.golfcoursearchitecture.net/images/Seletar-1.jpg', locationLink: 'https://www.google.com/maps/place/Seletar+Country+Club/@1.4096707,103.8581161,15z/data=!4m6!3m5!1s0x31da142fb8c775b5:0x4ec7ac9843c7173!8m2!3d1.4096707!4d103.8581161!16s%2Fg%2F1hc489rwq?entry=ttu' },
      ],
      'Paris': [
        { title: 'Eiffel Tower', image: 'https://www.travelandleisure.com/thmb/CbvtaZu659SP8qOSCljNCuRby_Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg', locationLink: 'https://www.google.com/maps/place/Eiffel+Tower/@48.8583701,2.2944813,15z/data=!4m6!3m5!1s0x47e66e2964e34e2d:0x8ddca9ee380ef7e0!8m2!3d48.8583701!4d2.2944813!16zL20vMDJqODE?entry=ttu' },
        { title: 'Notre Dame Cathedral', image: 'https://www.planetware.com/photos-large/F/france-paris-notre-dame-cathedral.jpg', locationLink: 'https://www.google.com/maps/place/Cath%C3%A9drale+Notre-Dame+de+Paris/@48.8529682,2.3499021,15z/data=!4m2!3m1!1s0x0:0x36401da7abfa068d?sa=X&ved=2ahUKEwjy-9fSwfiDAxVYb2wGHdroAH4Q_BJ6BAgQEAA' },
        { title: 'Louvre Museum', image: 'https://tourscanner.com/blog/wp-content/uploads/2018/09/best-Louvre-Museum-tours.jpg', locationLink: 'https://www.google.com/maps/place/Louvre+Museum/@48.8606111,2.337644,15z/data=!4m2!3m1!1s0x0:0xb975fcfa192f84d4?sa=X&ved=2ahUKEwjg4dCBwviDAxVnSWwGHe6HBDYQ_BJ6BAgSEAA' },
        { title: 'Cruise on the Seine', image: 'https://www.paris-tickets.com/wp-content/uploads/2023/11/rivercruise-night.jpg', locationLink: 'https://www.google.com/maps/place/Seine/@48.5977679,2.386897,8z/data=!3m1!4b1!4m6!3m5!1s0x47edb722f69c5dc7:0x4a812c1e7a4bad61!8m2!3d48.6382687!4d2.4489006!16zL20vMGYzdno?entry=ttu' },
        { title: 'Palace of Versailles', image: 'https://i.natgeofe.com/n/5f01634d-6d3c-49a8-beb4-75283b26e411/Versailles_p262.jpg?w=1084.125&h=727.125', locationLink: 'https://www.google.com/maps/place/Palace+of+Versailles/@48.8048649,2.1203554,15z/data=!4m2!3m1!1s0x0:0x538fcc15f59ce8f?sa=X&ved=2ahUKEwi5-4CCw_iDAxXXS2cHHQOxBtYQ_BJ6BAgQEAA' },
      ],
      'Marseille': [
        { title: 'Musée des Beaux-Arts', image: 'https://musees.marseille.fr/sites/default/files/styles/banner_middle/public/2020-09/musee-beaux-arts.jpg?itok=OGZmEygR', locationLink: 'https://www.google.com/maps/place/Mus%C3%A9e+des+Beaux-Arts,+Marseille/@43.3046188,5.3938911,15z/data=!4m6!3m5!1s0x12c9bf7eae793e2d:0xd2d146933c196e4d!8m2!3d43.3046188!4d5.3938911!16s%2Fm%2F046s9k1?entry=ttu' },
        { title: 'Old Port of Marseille', image: 'https://a.cdn-hotels.com/gdcs/production181/d1044/4f96004f-7b7d-42f4-b793-d64c2860d2fc.jpg?impolicy=fcrop&w=800&h=533&q=medium', locationLink: 'https://www.google.com/maps/place/Old+Port+of+Marseille/@43.2944646,5.3645147,16z/data=!3m1!4b1!4m6!3m5!1s0x12c9c0c6a1843729:0x7d3f3acf189dc3b1!8m2!3d43.2950303!4d5.3646265!16s%2Fm%2F02w32lt?entry=ttu' },
        { title: 'Notre-Dame de la Garde', image: 'https://img.freepik.com/premium-photo/historic-basilica-notre-dame-de-la-garde-marseille-south-france_177536-224.jpg?w=900', locationLink: 'https://www.google.com/maps/place/Basilica+of+Notre-Dame+of+la+Garde/@43.2839533,5.3712377,15z/data=!4m6!3m5!1s0x12c9c0c976b89df5:0x89254f95b5ee2ded!8m2!3d43.2839533!4d5.3712377!16zL20vMDFfcThj?entry=ttu' },
        { title: 'Château dIf', image: 'https://www.cheminsdememoire.gouv.fr/sites/default/files/2018-09/Lieux_SudIfXL.jpg', locationLink: "https://www.google.com/maps/place/Ch%C3%A2teau+d'If/@43.279781,5.325086,15z/data=!4m6!3m5!1s0x12c9c0bf33ff9b15:0x10dd415b34f5bd7e!8m2!3d43.279781!4d5.325086!16zL20vMDFjazBo?entry=ttu"},
        { title: 'Fort Saint-Jean', image: 'https://cdn.pixabay.com/photo/2019/04/14/20/52/fort-saint-jean-4127825_960_720.jpg', locationLink: 'https://www.google.com/maps/place/Fort+Saint-Jean/@43.2953604,5.3617108,15z/data=!4m2!3m1!1s0x0:0x813bd6bbc77f69dd?sa=X&ved=2ahUKEwj5tLTYxPiDAxVPrVYBHVMpD7gQ_BJ6BAgQEAA' },
      ],
      'Lyon': [
        { title: 'Vieux Lyon', image: 'https://bucketlistbri.com/wp-content/uploads/2022/11/vieux-lyon-fourviere.jpg', locationLink: 'https://www.google.com/maps/place/Vieux+Lyon,+69005+Lyon,+France/data=!4m2!3m1!1s0x47f4ebaaef7e7f5f:0x2d9cc97768f72426?sa=X&ved=2ahUKEwjH4a79xPiDAxVCTWcHHUPwD-QQ8gF6BAhhEAA' },
        { title: 'Notre Dame de Fourviere', image: 'https://cellar-c2.services.clever-cloud.com/org-fourviere-www/uploads/2018/10/la-basilique-notre-dame-de-fourvi%C3%A8re-lyon-int%C3%A9rieur.jpg', locationLink: 'https://www.google.com/maps/place/Basilica+of+Notre+Dame+of+Fourvi%C3%A8re/@45.7622698,4.822638,15z/data=!4m2!3m1!1s0x0:0x9d1bcc791b678e29?sa=X&ved=2ahUKEwi2griJxfiDAxXslFYBHf-0CSgQ_BJ6BAgSEAA' },
        { title: 'Musee du Cinema et de la Miniature', image: 'https://www.museeminiatureetcinema.fr/wp-content/uploads/2023/08/Miniature-Musee-Histoire-Naturelle.jpg', locationLink: 'https://www.google.com/maps/place/Mus%C3%A9e+Cin%C3%A9ma+et+Miniature/@45.761876,4.8273474,15z/data=!4m2!3m1!1s0x0:0xe300013405b2077b?sa=X&ved=2ahUKEwjrpa-fxfiDAxVJQ2cHHSuMCHoQ_BJ6BAgREAA' },
        { title: 'Lugdunum - Roman museum', image: 'https://thisislyon.fr/wp-content/uploads/2017/02/museum-of-gallo-roman-civilisation-800-450.jpg.webp', locationLink: 'https://www.google.com/maps/place/Gallo-Roman+Museum+of+Lyon-Fourvi%C3%A8re/@45.7604255,4.8199666,15z/data=!4m2!3m1!1s0x0:0x25da70f827915f41?sa=X&ved=2ahUKEwiOtai2xfiDAxWu1zQHHfElD6sQ_BJ6BAgPEAA' },
        { title: 'The Presquîle', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/fe/76/c2/the-presqu-ile.jpg?w=2000&h=-1&s=1', locationLink: "https://www.google.com/maps/search/The+Presqu'%C3%AEle/@46.9516615,-5.1053423,6z/data=!3m1!4b1?entry=ttu"},
      ],
      'Tokyo': [
        { title: 'Tokyo Tower ', image: 'https://i1.wp.com/thetowerinfo.com/wp-content/uploads/2018/04/japan-tokyo-tower-night-view.jpg?resize=950%2C664&ssl=1', locationLink: 'https://www.google.com/maps/place/Tokyo+Tower/@35.6585805,139.7454329,15z/data=!4m6!3m5!1s0x60188bbd9009ec09:0x481a93f0d2a409dd!8m2!3d35.6585805!4d139.7454329!16zL20vMDEzMl94?entry=ttu' },
        { title: 'Shinjuku Gyoen', image: 'https://media.cntraveler.com/photos/5a8c65b4fc08c0430e845f19/16:9/w_1920,c_limit/Shinjuku-Gyoen-National-Garden_2018_GettyImages-629620202.jpg', locationLink: 'https://www.google.com/maps/place/Shinjuku+Gyoen+National+Garden/@35.6851763,139.7100517,15z/data=!4m2!3m1!1s0x0:0x6a1eb1b5a117f287?sa=X&ved=2ahUKEwjo6K2avviDAxXfR2wGHa0fBikQ_BJ6BAgQEAA' },
        { title: 'Tokyo Disneyland', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/A8_Tokyo_Disneyland.jpg/330px-A8_Tokyo_Disneyland.jpg', locationLink: 'https://www.google.com/maps/search/tokyo+disneyland/@35.6328964,139.8762744,17z?entry=ttu' },
        { title: 'Ginza Market', image: 'https://plus.unsplash.com/premium_photo-1661902398022-762e88ff3f82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2luemF8ZW58MHx8MHx8fDA%3D', locationLink: 'https://www.google.com/maps/place/Ginza,+Chuo+City,+Tokyo+104-0061,+Japan/@35.6696261,139.7655391,16z/data=!3m1!4b1!4m6!3m5!1s0x60188be701836fbb:0x604685b30ba99851!8m2!3d35.6712228!4d139.7664859!16zL20vMDFrNHQy?entry=ttu' },
      ],
      'Osaka': [
        { title: 'GoKart Tour with Funny Costume Rental', image: 'https://lh5.googleusercontent.com/p/AF1QipNYij0uuDuX5WHvEunsP3Jt4CGHHZl76FYGOjjP=w426-h240-k-no', locationLink: 'https://www.google.com/maps/place/Street+Kart+Osaka/@34.6630203,135.4071749,13z/data=!4m10!1m2!2m1!1sgo+karting+near+Osaka,+Japan!3m6!1s0x6000e614c1738183:0xf729cbcb302e18ba!8m2!3d34.670913!4d135.488076!15sChxnbyBrYXJ0aW5nIG5lYXIgT3Nha2EsIEphcGFukgENZ29fa2FydF90cmFja-ABAA!16s%2Fg%2F11csq5ww03?entry=ttu' },
        { title: 'Dotombori District', image: 'https://lh5.googleusercontent.com/p/AF1QipPkUAZCQbFhygmrpLZXUOs1jwmc52jscp3MWaHp=w408-h272-k-no', locationLink: 'https://www.google.com/maps/place/Dotonbori/@34.6687234,135.4987222,17z/data=!3m1!4b1!4m6!3m5!1s0x6000e713818af9fd:0xb8bb1326b48ba590!8m2!3d34.6687234!4d135.5012971!16zL20vMDN4eGgz?entry=ttu' },
        { title: 'Universal Studios ', image: 'https://lh5.googleusercontent.com/p/AF1QipMhc1hxKIsBL2I-cX-cw2TEEEnuxVWHzRWVOK8e=w408-h271-k-no', locationLink: 'https://www.google.com/maps/place/Universal+Studios+Japan/@34.6656768,135.4297436,17z/data=!3m1!4b1!4m6!3m5!1s0x6000e0d083d5e25d:0x3605fe25303252aa!8m2!3d34.6656768!4d135.4323185!16zL20vMDczN3g1?entry=ttu' },
        { title: 'Osaka Castle', image: 'https://lh5.googleusercontent.com/p/AF1QipMPljwQVCU4NjVQuCgIykprZvHEu9ZMn8wU6WXY=w408-h306-k-no', locationLink: 'https://www.google.com/maps/place/Osaka+Castle/@34.6872571,135.5232797,17z/data=!3m1!4b1!4m6!3m5!1s0x6000e0cd5c283afd:0xf01d07d5ca11e41!8m2!3d34.6872571!4d135.5258546!16zL20vMDI0Yl9n?entry=ttu' },
      ],

     'Nagoya': [ 
        { title: 'Museum of Industry and Technology', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/66/9e/de/caption.jpg?w=1200&h=-1&s=1', locationLink: 'https://www.google.com/maps/place/Toyota+Commemorative+Museum+of+Industry+and+Technology/@35.182564,136.7235493,12z/data=!3m1!5s0x60037693d3d5e449:0xd5595db26d9e7ba0!4m10!1m2!2m1!1snagoya+toyota+museum!3m6!1s0x60037693d3ffffff:0xa3d447b5c3a3572b!8m2!3d35.182564!4d136.8759846!15sChRuYWdveWEgdG95b3RhIG11c2V1bSIDiAEBWhYiFG5hZ295YSB0b3lvdGEgbXVzZXVtkgERdGVjaG5vbG9neV9tdXNldW3gAQA!16s%2Fm%2F0gj9twx?entry=ttu' },
        { title: 'SCMaglev and Railway Park', image: 'https://lh5.googleusercontent.com/p/AF1QipM4VGg7j17VxmoAX5frJbsK68JWvc8jFlhqBiDx=w426-h240-k-no', locationLink: 'https://www.google.com/maps/place/SCMaglev+and+Railway+Park/@35.0491384,136.8483403,17z/data=!3m2!4b1!5s0x600378cf6eed2127:0xba068e6c5a6fe2cc!4m6!3m5!1s0x600378cf145b6ef5:0x4ce8b46a9c94b392!8m2!3d35.0491384!4d136.8509152!16s%2Fm%2F06zpkyx?entry=ttu' }, 
        { title: 'Kyoto Private Tour', image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/09/2b/78/b8.jpg', locationLink: 'https://www.google.com/maps/place/Kyoto,+Japan/@35.0101713,135.7632785,17z/data=!4m6!3m5!1s0x6001a8d6cd3cc3f1:0xc0961d366bbb1d3d!8m2!3d35.011564!4d135.7681489!16zL20vMDlkNF8?entry=ttu' }, 
        { title: 'Autumn Leaves Private Tour', image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/1e/98/aa.jpg', locationLink: 'https://www.google.com/maps/place/Tokugawa+Park/@35.2301085,136.1531948,10z/data=!3m1!5s0x600370fd4c53f241:0xec221cbf05532cbe!4m10!1m2!2m1!1sAutumn+Leaves+Tour+nagoya!3m6!1s0x600370f52b86d80b:0x1b03350b0ab77ba3!8m2!3d35.1842918!4d136.9321824!15sChlBdXR1bW4gTGVhdmVzIFRvdXIgbmFnb3lhWhsiGWF1dHVtbiBsZWF2ZXMgdG91ciBuYWdveWGSAQZnYXJkZW6aASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUldMVGhMVTNkM1JSQULgAQA!16s%2Fm%2F0gjb_3m?entry=ttu' },
        { title: 'Port of Nagoya Public Aquarium', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/38/78/06/caption.jpg?w=1200&h=-1&s=1', locationLink: 'https://www.google.com/maps/place/Port+Of+Nagoya+Public+Aquarium/@35.0905132,136.8758628,17z/data=!3m1!4b1!4m6!3m5!1s0x600379a0d3c924b3:0xa1a962dc2785debe!8m2!3d35.0905088!4d136.8784377!16s%2Fm%2F0g59yq7?entry=ttu' },
      ],
    'Colombo': [
        { title: 'Colombo City Tour', image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/0a/04/17/79.jpg', locationLink: 'https://google.com/maps/place/Tuk+It+Easy+Colombo/@7.0245328,79.5301055,10z/data=!4m10!1m2!2m1!1sColombo+City+Tour+by+Tuk+Tuk+Morning+%26+Evening+!3m6!1s0x3ae25b5eaa32c337:0x52ce7f60862b1ec!8m2!3d6.8979581!4d79.8738434!15sCi5Db2xvbWJvIENpdHkgVG91ciBieSBUdWsgVHVrIE1vcm5pbmcgJiBFdmVuaW5nWjAiLmNvbG9tYm8gY2l0eSB0b3VyIGJ5IHR1ayB0dWsgbW9ybmluZyAmIGV2ZW5pbmeSAQ10b3VyX29wZXJhdG9ymgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU14YTBscFZqZDNSUkFC4AEA!16s%2Fg%2F11flzqs017?entry=ttu' }, 
        { title: 'Gangaramaya Temple', image: 'https://lh5.googleusercontent.com/p/AF1QipMs12ozYmCV7FJwpKx7kJ0drTsmHED4Qt52qY3s=w408-h272-k-no', locationLink: 'https://www.google.com/maps/place/Gangarama+Maha+Vihara/@6.9167198,79.8540707,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2596b9982dc43:0x3a35356ebd5eed36!8m2!3d6.9167145!4d79.8566456!16s%2Fm%2F0j1hppj?entry=ttu' }, 
        { title: 'Galle Face Green', image: 'https://lh5.googleusercontent.com/p/AF1QipMahfgfGDmpYSpkbol9RONRCOAR640L59ghjCls=w408-h306-k-no', locationLink: 'https://www.google.com/maps/place/Galle+Face+Green/@6.9237935,79.8423575,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae259396a72f305:0x5e7e24c6bf94136f!8m2!3d6.9237882!4d79.8449324!16s%2Fm%2F02865rc?entry=ttu' }, 
        { title: 'Viharamahadevi Park', image: 'https://lh5.googleusercontent.com/p/AF1QipNMPO4k5NKN2auHnylcXeQMZGyPnZfJIeSCbeKn=w408-h306-k-no', locationLink: 'https://www.google.com/maps/place/Colombo+National+Museum/@6.9100044,79.8583283,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae2596fa1f4b2af:0xd90a283d68f9a48d!8m2!3d6.9099991!4d79.8609032!16s%2Fg%2F11bv302yhv?entry=ttu' },
       ],
       
    'Galle': [ 
        { title: 'Galle Dutch Fort', image: 'https://lh5.googleusercontent.com/p/AF1QipPUN0vE-zFizA1VHKCOz3T2w3FB13iT_pr2FWZB=w408-h306-k-no', locationLink: 'https://www.google.com/maps/place/Galle+Dutch+Fort,+Galle+80000,+Sri+Lanka/@6.0272383,80.2115504,16z/data=!3m1!4b1!4m6!3m5!1s0x3ae173a4115316af:0x6e9078b6e3e0a7f!8m2!3d6.0304644!4d80.2150237!16s%2Fg%2F1z449vmqd?entry=ttu' },
        { title: 'sea turtle galle ', image: 'https://lh5.googleusercontent.com/p/AF1QipPWP2Aai-LB5KOphg5OH6KbVoeet3yw14TJD2PP=w408-h401-k-no', locationLink: 'https://www.google.com/maps/place/Sea+Turtle+Hatchery+Centre,+Mahamodara/@6.0405752,80.1602572,14z/data=!4m10!1m2!2m1!1ssea+turtle+galle+srilanka!3m6!1s0x3ae176a77a395a21:0x18a1078243359955!8m2!3d6.0405752!4d80.198366!15sChlzZWEgdHVydGxlIGdhbGxlIHNyaWxhbmthWhsiGXNlYSB0dXJ0bGUgZ2FsbGUgc3JpbGFua2GSARd3aWxkbGlmZV9yZXNjdWVfc2VydmljZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VOamFsbFhXVTlCRUFF4AEA!16s%2Fg%2F11dxbm4jcd?entry=ttu' },
        { title: ' Galle Fort Lighthouse', image: 'https://lh5.googleusercontent.com/p/AF1QipOhPUAQXDvD89PPHGnHdTIUA0kCOvoosxVBCorx=w408-h544-k-no', locationLink: 'https://www.google.com/maps/place/Lighthouse+-+Galle/@6.02748,80.2146942,17z/data=!4m10!1m2!2m1!1s+Galle+Fort+Lighthouse!3m6!1s0x3ae173a7b5b11cbd:0xfde8772f0d014daf!8m2!3d6.0245613!4d80.2193661!15sChVHYWxsZSBGb3J0IExpZ2h0aG91c2VaFyIVZ2FsbGUgZm9ydCBsaWdodGhvdXNlkgESdG91cmlzdF9hdHRyYWN0aW9umgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5DYUhGMUxVTlJFQUXgAQA!16s%2Fm%2F0412sst?entry=ttu' },
        { title: 'Martin Wickramasinghe Folk Museum', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/cf/50/4a/garden-with-traditional.jpg?w=2200&h=-1&s=1', locationLink: 'https://www.google.com/maps/place/Martin+Wickramasinghe+Folk+Museum/@5.9899423,80.3254441,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae16cd121185f6f:0xbe05cd99f70c84de!8m2!3d5.989937!4d80.328019!16s%2Fg%2F12hmk_x7t?entry=ttu' },
        { title: 'Dutch Reformed Church', image: 'https://lh3.googleusercontent.com/p/AF1QipNwEyifXXxBcMdBJ1T-9eInDMuz0fIgkkvVjHI8=s1360-w1360-h1020', locationLink: 'https://www.google.com/maps/dir//26H8%2B7RQ+Dutch+Reformed+Church,+Galle+80000,+Sri+Lanka/@5.9899423,80.3254441,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ae173b15a555555:0x652e0d262eb17950!2m2!1d80.2171868!2d6.0282269?entry=ttu' },
       ],
    
    'Bentota': [ 
       { title: 'cinnamon island', image: 'https://lh3.googleusercontent.com/gps-proxy/AMy85WKawlyuHuxOaX1GQmzIavVgkrVmJouDIrt5Z3UQi-rFhLWpmS2FJzU7cCQWYsPeF7bBzN7lfnjrXJiMeSKRNeOT6YaI_UEwbWcAxaX_SGsCo1ZOfPDSRcVR0ihRc5Ow0B1TyDRNexnoH8osrQ4Iahtp0fwSFp-XSXzC2yntLdNsEdXb3BGOXGLc=w408-h272-k-no', locationLink: 'https://www.google.com/maps/place/Cinnamon+Bentota+Beach/@6.4249055,79.8910502,12z/data=!4m13!1m2!2m1!1scinnamon+island+bentota!3m9!1s0x3ae22e906e6b13bd:0x9f8878938877347f!5m2!4m1!1i2!8m2!3d6.4249055!4d79.9968753!15sChdjaW5uYW1vbiBpc2xhbmQgYmVudG90YVoZIhdjaW5uYW1vbiBpc2xhbmQgYmVudG90YZIBDHJlc29ydF9ob3RlbJoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOQ2ExbHVjRzlCUlJBQuABAA!16s%2Fg%2F1tkjjmdt?entry=ttu' }, 
       { title: 'Galapata Vihara', image: 'https://live.staticflickr.com/5459/7086599611_b6a9b2259f_b.jpg', locationLink: 'https://www.google.com/maps/place/Galapatha+Rajamaha+Viharaya/@6.4178261,80.025096,17z/data=!4m15!1m8!3m7!1s0x3ae22c3c325d6669:0xb16328244f8bb145!2sGalapatha+Rajamaha+Viharaya!8m2!3d6.4178261!4d80.025096!10e5!16s%2Fg%2F11bzrsrylf!3m5!1s0x3ae22c3c325d6669:0xb16328244f8bb145!8m2!3d6.4178261!4d80.025096!16s%2Fg%2F11bzrsrylf?entry=ttu' },
       { title: 'Galapatha Rajamaha Viharaya', image: 'https://lh5.googleusercontent.com/p/AF1QipMkVb_PXPC6gCwQxMExZowHRdnUV2B0h3v714IK=w408-h256-k-no', locationLink: 'https://www.google.com/maps/place/Galapatha+Rajamaha+Viharaya/@6.4178261,80.025096,17z/data=!4m15!1m8!3m7!1s0x3ae22c3c325d6669:0xb16328244f8bb145!2sGalapatha+Rajamaha+Viharaya!8m2!3d6.4178261!4d80.025096!10e5!16s%2Fg%2F11bzrsrylf!3m5!1s0x3ae22c3c325d6669:0xb16328244f8bb145!8m2!3d6.4178261!4d80.025096!16s%2Fg%2F11bzrsrylf?entry=ttu' },
       { title: 'Ventura Beach', image: 'https://drupal8-prod.visitcalifornia.com/sites/drupal8-prod.visitcalifornia.com/files/2020-09/VC_Ventura_Gty_1264609656_RF_1280x640.jpg', locationLink: 'https://www.google.com/maps/place/Ventura+Beach/@6.4234707,79.9953199,17z/data=!4m15!1m8!3m7!1s0x3ae22e9054db49bf:0xf33e613717e43074!2sVentura+Beach!8m2!3d6.4234707!4d79.9953199!10e5!16s%2Fg%2F1tdk__9s!3m5!1s0x3ae22e9054db49bf:0xf33e613717e43074!8m2!3d6.4234707!4d79.9953199!16s%2Fg%2F1tdk__9s?entry=ttu' },
       { title: 'Lunuganga', image: 'https://lh3.googleusercontent.com/gps-proxy/AMy85WLLTvquIR1_XEShnkfaao8C9887MhC1eAVMwXGCoUIrYo3dnUyXegJeb8IphoDvg65YSnn_B73A80UyVvdzKM3UmneTpmu45BGFw5E6q1drgiAeKK14keOGftXm1i0xm9ExA6ENZH2I2ATASKFQvxK_EZdJBhtsCWKdl-nqy7SD9Z4PJQKuuTH_4A=w408-h264-k-no', locationLink: 'https://www.google.com/maps/place/Lunuganga/@6.4234707,79.9953199,17z/data=!4m6!3m5!1s0x3ae22c0fa88ff5e7:0xed276d6844793b5e!8m2!3d6.4033838!4d80.0218791!16s%2Fg%2F11c1rg303b?entry=ttu' }, 
       ],

    'New York': [
        { title: 'Top Of The Rock', image: 'https://lh5.googleusercontent.com/p/AF1QipM8EPhtYYrg0JzCYiey5sMEd-6opWnAb0JeyRUj=w408-h407-k-no', locationLink: 'https://google.com/maps/place/Top+of+The+Rock/@40.7593495,-73.9819836,17z/data=!3m2!4b1!5s0x89c258fecf0c6825:0xb825fcec483ad5d5!4m6!3m5!1s0x89c258ff31cabb7b:0xda17e23e0f1fc620!8m2!3d40.7593495!4d-73.9794087!16s%2Fg%2F11cmgnblyq?entry=ttu' },
        { title: 'Empire State Building', image: 'https://lh5.googleusercontent.com/p/AF1QipPTDVQpobw6llUaFCsZrJBWsLNYBPByDUJzCx85=w408-h306-k-no', locationLink: 'https://www.google.com/maps/place/Empire+State+Building,+New+York,+NY+10001,+USA/@40.7485452,-73.9883384,17z/data=!3m1!4b1!4m6!3m5!1s0x89c259a9aeb1c6b5:0x35b1cfbc89a6097f!8m2!3d40.7485452!4d-73.9857635!16s%2Fg%2F12hkxmzwd?entry=ttu' },
      ],
    'Los Angeles': [
        { title: 'Universal Studios Hollywood', image: 'https://lh5.googleusercontent.com/p/AF1QipMSA_LS1qPw0LUc2luiVrYNC2kcH3rHyBsHpNlG=w408-h306-k-no', locationLink: 'https://www.google.com/maps/place/Universal+Studios+Hollywood/@34.1372379,-118.3568356,17z/data=!4m10!1m2!2m1!1sUniversal+Studios+Hollywood.+37,453.+Amusement+%26+Theme+Parks.+...!3m6!1s0x80c2be4f253238cf:0xd3dd5027799c9a71!8m2!3d34.1381168!4d-118.3533783!15sCkFVbml2ZXJzYWwgU3R1ZGlvcyBIb2xseXdvb2QuIDM3LDQ1My4gQW11c2VtZW50ICYgVGhlbWUgUGFya3MuIC4uLlo7Ijl1bml2ZXJzYWwgc3R1ZGlvcyBob2xseXdvb2QgMzc0NTMgYW11c2VtZW50ICYgdGhlbWUgcGFya3OSAQp0aGVtZV9wYXJrmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJ6TVU1SExYRm5SUkFC4AEA!16zL20vMDVxc3k4?entry=ttu' },
        { title: 'Staples Center', image: 'https://lh5.googleusercontent.com/p/AF1QipNknXegTcGYGA6VwSgQbpgcVlMA2zaLp7bcpJmu=w408-h306-k-no', locationLink: 'https://www.google.com/maps/place/Staples+Center/@34.0429909,-118.2699502,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2c7b8f59efd39:0xf7a1121cc755e4b7!8m2!3d34.0429909!4d-118.2673753!16s%2Fg%2F11j6qbf95c?entry=ttu' },
      ],
    'Chicago': [
        { title: 'The Art Institute of Chicago ', image: 'https://lh5.googleusercontent.com/p/AF1QipPwFmySSTqEJK4naHIi1M9W27jQ8iFrBEP921sC=w408-h408-k-no', locationLink: 'https://www.google.com/maps/place/The+Art+Institute+of+Chicago/@41.8802817,-87.6264544,18z/data=!4m10!1m2!2m1!1sThe+Art+Institute+of+Chicago+!3m6!1s0x880e2ca3e2d94695:0x4829f3cc9ca2d0de!8m2!3d41.8795845!4d-87.6237133!15sChxUaGUgQXJ0IEluc3RpdHV0ZSBvZiBDaGljYWdvWh4iHHRoZSBhcnQgaW5zdGl0dXRlIG9mIGNoaWNhZ2-SAQZtdXNldW3gAQA!16s%2Fm%2F027hqc_?entry=ttu' },
        { title: 'Millennium Park', image: 'https://lh5.googleusercontent.com/p/AF1QipM2C2QBNNKVZvCqGivui_peAyUhCcfso_JIpEoD=w408-h272-k-no', locationLink: 'https://www.google.com/maps/place/Millennium+Park/@41.8825524,-87.6313061,16z/data=!4m10!1m2!2m1!1smillennium+park+chicago!3m6!1s0x880e2ca68a4f9c03:0x44182cdcb5a91004!8m2!3d41.8825524!4d-87.6225514!15sChdtaWxsZW5uaXVtIHBhcmsgY2hpY2Fnb1oZIhdtaWxsZW5uaXVtIHBhcmsgY2hpY2Fnb5IBBHBhcmvgAQA!16zL20vMDNkXzdy?entry=ttu' },
      
      ],
    'Sydney': [
        { title: 'Sydney Harbour Bridge', image: 'https://lh5.googleusercontent.com/p/AF1QipNy1m2e4SmwXDCVsX57X9Swfl7JYsV4v5LhN893=w408-h272-k-no', locationLink: 'https://www.google.com/maps/place/Sydney+Harbour+Bridge/@-33.8523063,151.2082122,17z/data=!3m2!4b1!5s0x6b12ae42dd615e1f:0x5ffdca9824471ca3!4m6!3m5!1s0x6b12ae5d25ead5e3:0x68948eb717c0c43e!8m2!3d-33.8523063!4d151.2107871!16zL20vMDcwMXE?entry=ttu' },
        { title: 'Street Art of Newtown', image: 'https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=HUw7Hd2As0R_mMRK_8WLuA&cb_client=search.gws-prod.gps&w=408&h=240&yaw=270.9&pitch=0&thumbfov=100', locationLink: 'https://www.google.com/maps/place/Rawson+Lane+Street+Art/@-33.8968358,151.1047266,13z/data=!4m10!1m2!2m1!1sStreet+Art+of+Newtown,australia!3m6!1s0x6b12b1b3367ec30f:0x369614a8d145a97e!8m2!3d-33.8998993!4d151.176451!15sCh9TdHJlZXQgQXJ0IG9mIE5ld3Rvd24sYXVzdHJhbGlhkgESdG91cmlzdF9hdHRyYWN0aW9u4AEA!16s%2Fg%2F11v4j091my?entry=ttu' },
        
      ],
    'Melbourne': [
        { title: 'Royal Botanic Garden', image: 'https://lh5.googleusercontent.com/p/AF1QipNr16xQjl9PqqLfiXee9kHtLv7xu-kvjiBPdeWw=w408-h306-k-no', locationLink: 'https://www.google.com/maps/place/Royal+Botanic+Gardens+Victoria+-+Melbourne+Gardens/@-37.8302443,144.9775747,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad64296fb298d3b:0xf0456760531d7c0!8m2!3d-37.8302443!4d144.9801496!16zL20vMDUwOWR0?entry=ttu' },
        { title: 'Shrine of Remembrance', image: 'https://lh5.googleusercontent.com/p/AF1QipM8htf0oBRNqgvM83Msp7WUr3TjFIgE6SA8ed2S=w408-h306-k-no', locationLink: 'https://www.google.com/maps/place/Shrine+of+Remembrance/@-37.8305164,144.970857,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad642a60c882419:0x5fab9a866993c58a!8m2!3d-37.8305164!4d144.9734319!16zL20vMDNfOGR3?entry=ttu' },
        
      ],
    'Brisbane': [
        { title: 'South Bank Parkland', image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/33/d1/da/south-bank-parklands.jpg?w=500&h=-1&s=1', locationLink:'https://www.google.com/maps/place/South+Bank+Parklands/@-27.475081,153.0186182,17z/data=!3m1!4b1!4m6!3m5!1s0x6b915bf1ea45e86f:0xe670fce36c416c0e!8m2!3d-27.475081!4d153.0211931!16zL20vMDR3dmpx?entry=ttu' },
        { title: 'City Cake Terminal Bank', image: 'https://lh5.googleusercontent.com/p/AF1QipN9znc5SPO1xeOHm08FTVWAkFWsz5eLS-47ftYU=w408-h304-k-no', locationLink: 'https://www.google.com/maps/place/Lone+Pine+St,+Enoggera+QLD+4051,+Australia/@-27.4312842,152.9854095,17z/data=!3m1!4b1!4m6!3m5!1s0x6b9157145721760d:0x5df3acb3eb35873a!8m2!3d-27.4312842!4d152.9879844!16s%2Fg%2F1tghprrf?entry=ttu' },
      ],
      
  };
  
  let selectedCountry = '';
  let selectedCity = '';
  
  function planMyTrip() {
    const countrySelect = document.getElementById('countrySelect');
    selectedCountry = countrySelect.value;
  
    const citySelectionContainer = document.getElementById('citySelectionContainer');
    const cityButtonsContainer = document.getElementById('cityButtons');
  
    if (selectedCountry) {
      // Check if geolocation is supported
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Successfully got the user's current location
            console.log("Latitude:", position.coords.latitude, "Longitude:", position.coords.longitude);
            // You can use this location information as needed
          },
          (error) => {
            // Handle errors
            console.error("Error getting location:", error.message);
            // Optionally, request location permissions here
            // (show a popup to the user asking for location permissions)
          }
        );
      } else {
        // Geolocation is not supported
        console.error("Geolocation is not supported by this browser.");
        // Optionally, provide a message to the user
      }
  
      const citiesInCountry = cities[selectedCountry];
  
      // Clear previous content
      cityButtonsContainer.innerHTML = '';
  
      // Populate city buttons
      citiesInCountry.forEach(city => {
        const button = document.createElement('button');
        button.textContent = city;
        button.onclick = () => chooseCity(city);
        cityButtonsContainer.appendChild(button);
      });
  
      // Display city selection container
      citySelectionContainer.style.display = 'block';
    } else {
      // Hide city selection container if no country is selected
      citySelectionContainer.style.display = 'none';
    }
  
    // Hide tourist places container when planning a new trip
    hideTouristPlaces();
  }
  
  
  function chooseCity(city) {
    selectedCity = city;
    const touristPlacesContainer = document.getElementById('touristPlacesContainer');
  
    // Clear previous content
    touristPlacesContainer.innerHTML = '';

    if (selectedCity) {
        // Add heading "Place Details"
        const heading = document.createElement('h2');
        heading.textContent = 'Place Details';
        touristPlacesContainer.appendChild(heading);
    
        const touristPlacesInCity = touristPlaces[selectedCity];
    
        // Populate tourist places cards
        touristPlacesInCity.forEach(place => {
          const card = createTouristPlaceCard(place);
          touristPlacesContainer.appendChild(card);
        });
    
        // Display tourist places container
        touristPlacesContainer.style.display = 'block';
      }
    }
  
  function hideTouristPlaces() {
    const touristPlacesContainer = document.getElementById('touristPlacesContainer');
    // Hide tourist places container
    touristPlacesContainer.style.display = 'none';
  }
  
  function createTouristPlaceCard(place) {
    const card = document.createElement('div');
    card.classList.add('tourist-place-card');
  
    const image = document.createElement('img');
    image.src = place.image;
    image.alt = place.title;
  
    const title = document.createElement('h3');
    title.textContent = place.title;
  
    const locationLink = document.createElement('a');
    locationLink.href = place.locationLink;
    locationLink.textContent = ' --->>  Visit Location  <<---';
  
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(locationLink);
  
    return card;
  }


  