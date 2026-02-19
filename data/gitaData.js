const GITA_DATA = {
    confused: {
        sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",
        hindi: "तुझे केवल कर्म करने का अधिकार है, फल पर नहीं।",
        meaning: "Focus on action, not on results.",
        example: "एक छात्र को परिणाम की चिंता छोड़कर पढ़ाई पर ध्यान देना चाहिए।",
        action: "आज 2 घंटे बिना distraction पढ़ाई करो।"
    },

    fear: {
        sanskrit: "न जायते म्रियते वा कदाचिन्।",
        hindi: "आत्मा न जन्म लेती है और न मरती है।",
        meaning: "तुम केवल शरीर नहीं हो, इसलिए असफलता से मत डरो।",
        example: "Fail होना तुम्हारी पहचान नहीं है।",
        action: "आज वह काम करो जिससे तुम डर रहे हो।"
    },

    lazy: {
        sanskrit: "उद्धरेदात्मनात्मानं।",
        hindi: "मनुष्य स्वयं अपने को ऊपर उठाए।",
        meaning: "Self-discipline builds destiny.",
        example: "सुबह जल्दी उठना जीवन की दिशा बदल सकता है।",
        action: "कल 1 घंटा जल्दी उठो और productive काम करो।"
    }
};

const GITA_CHAPTERS = {
    en: [
        {
            chapter: 1,
            title: "Arjuna's Dilemma (अर्जुन विषाद योग)",
            summary: "Arjuna faces the battlefield and is overcome by grief and confusion, seeing his beloved teachers and friends on the opposing side.",
            keyVerse: "I see no good in killing my kinsmen in battle.",
            detailed: "This chapter sets the foundation for the Bhagavad Gita discourse. Arjuna stands on the battlefield of Kurukshetra seeing both armies prepared for war. Overwhelmed by compassion and familial affection, he witnesses his teachers Bhishma and Drona, his uncles, and other relatives on the Kaurava side. This grief-stricken state causes Arjuna to drop his bow and arrow, declaring to Krishna that he cannot and will not fight. His mind becomes confused about his duty as a warrior, and he questions the morality and righteousness of the impending war. This chapter captures the universal human dilemma of duty versus emotion.",
            themes: ["Dharma", "Emotional conflict", "Family bonds"],
            verses: 47,
            teachings: "The importance of understanding one's duty and not being swayed by emotional attachments.",
            shlokas: [
                {
                    verse: "1.1",
                    sanskrit: "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः।\nमामकाः पाण्डवाश्चैव किमकुर्वत संजय।।",
                    meaning: "On the sacred land of Kurukshetra, with both sides ready to fight, tell me Sanjaya, what did the people of both armies do?"
                },
                {
                    verse: "1.28",
                    sanskrit: "अर्जुन उवाच - कृपया परया आवृष्टो दृष्टिः श्रूयते न मम।",
                    meaning: "Arjuna said: My limbs are failing, my mouth is drying up, my body is trembling, and my hair is standing on end."
                }
            ]
        },
        {
            chapter: 2,
            title: "Sankhya Yoga (सांख्य योग) - The Yoga of Analysis",
            summary: "Krishna begins his profound teachings, explaining the eternal nature of the soul and the concept of detached action.",
            keyVerse: "You have the right to perform your duty, but not to the fruits of action.",
            detailed: "In this chapter, Krishna addresses Arjuna's grief and confusion with the fundamental truths about the nature of reality and the soul (Atman). Krishna teaches that the soul is eternal, unchanging, and immortal - it neither takes birth nor dies. The physical body is temporary and subject to change, but the soul pervades all beings eternally. Krishna introduces the concept of Karma Yoga - performing one's duty without attachment to the results. He explains that one should act according to one's nature and prescribed duty without being concerned with success or failure. This chapter also introduces the three paths to liberation: Sankhya (knowledge), Karma Yoga (action), and Bhakti (devotion).",
            themes: ["Soul immortality", "Duty", "Non-attachment", "Three paths to liberation"],
            verses: 72,
            teachings: "The soul is eternal and immortal. Act with dedication to duty, not with attachment to rewards. Equanimity in success and failure is wisdom.",
            shlokas: [
                {
                    verse: "2.13",
                    sanskrit: "देहिनो ऽस्मिन् यथा देहे कौमारं यौवनं जरा।\nतथा देहान्तरप्राप्तिर्धीरस्तत्र न मुह्यति।।",
                    meaning: "As the embodied soul continuously passes through childhood, youth, and old age, similarly at the time of death the soul obtains another body."
                },
                {
                    verse: "2.47",
                    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि।।",
                    meaning: "You have a right to perform your prescribed duty, but you are not entitled to the fruits of action. Never consider yourself the cause of the results of your activities."
                }
            ]
        },
        {
            chapter: 3,
            title: "Karma Yoga (कर्म योग) - The Yoga of Action",
            summary: "The path of selfless action and the importance of performing duty without desire for results.",
            keyVerse: "Perform your duty without attachment and abandonment of the fruits of action.",
            detailed: "Krishna clarifies that renouncing action is not the solution; instead, one should work relentlessly while renouncing the fruits of action. The chapter emphasizes that everyone is bound by their nature and cannot escape activity. Even those who try to remain inactive cannot be truly inactive as their mind and senses will move. The proper way is to perform all duties with devotion, dedicating the results to the Divine. Krishna also teaches about the cycle of creation maintained through sacrifice and how each person has a role to play in the cosmic order. The soul's evolution depends on proper action performed with the right attitude.",
            themes: ["Selfless action", "Duty", "Nature and temperament", "Cycle of creation"],
            verses: 43,
            teachings: "It is better to perform one's own duty imperfectly than another's perfectly. Act without expectation of results, offering all fruits to the Divine.",
            shlokas: [
                {
                    verse: "3.2",
                    sanskrit: "लोकानां चरितं पद्धं कुर्वते प्रमाणं यदि पुरुषः।",
                    meaning: "It is better to perform one's prescribed duty, even though it may be imperfect, than to perform the duty of another perfectly."
                },
                {
                    verse: "3.21",
                    sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।",
                    meaning: "Whatever a great man does, other men will follow. Whatever standard he sets by exemplary acts, all the world pursues."
                }
            ]
        },
        {
            chapter: 4,
            title: "Jnana-Karma-Sannyasa Yoga (ज्ञान-कर्म-सन्यास योग)",
            summary: "The path of knowledge combined with action and renunciation. Krishna reveals his divine teachings.",
            keyVerse: "Actions do not bind one who has relinquished attachment, who has transcended doubt through wisdom.",
            detailed: "Krishna explains his incarnations throughout history. He emphasizes the supreme importance of wisdom and knowledge (Jnana) in understanding reality. Mere performance of rituals or external actions without knowledge does not lead to liberation. True knowledge means understanding the eternal nature of the soul and the temporary nature of the material world. The chapter teaches that wisdom is the culmination of all actions and sacrifices. Krishna reveals various paths of yoga and their ultimate purpose - to attain Brahman consciousness. He demonstrates how knowledge, action, and meditation together form a complete path to enlightenment.",
            themes: ["Divine incarnations", "Supreme knowledge", "Spiritual wisdom", "Transcendence"],
            verses: 42,
            teachings: "Knowledge of the Self is the greatest sacrifice. The wise see all beings with equal vision. Action ordained by knowledge is superior to mere ritual.",
            shlokas: [
                {
                    verse: "4.9",
                    sanskrit: "जन्म कर्म च मे दिव्यं एवं यो वेत्ति तत्त्वतः।",
                    meaning: "One who understands my divine appearance and activities in truth does not take birth again after leaving the body."
                },
                {
                    verse: "4.38",
                    sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।",
                    meaning: "In this world, there is nothing so sublime and pure as transcendental knowledge."
                }
            ]
        },
        {
            chapter: 5,
            title: "Karma-Sannyasa Yoga (कर्म-सन्यास योग) - Renunciation through Action",
            summary: "The reconciliation of renunciation and action. Understanding that both lead to the same goal.",
            keyVerse: "The wise sees inaction in action and action in inaction.",
            detailed: "This chapter clarifies that renunciation of action and dedicated action both lead to the same supreme state, but the path of action is superior for the householder. Krishna teaches that mental renunciation - letting go of attachment while performing duties - is more important than physically abandoning all activities. True yoga is the integration of knowledge, action, and meditation. A person can attain liberation while still engaged in worldly duties if done with the right attitude and complete surrender to the Divine. The chapter emphasizes inner purity and mental equanimity as the true markers of renunciation.",
            themes: ["Integration", "Mental renunciation", "Equanimity", "Divine surrender"],
            verses: 29,
            teachings: "The yogi who has controlled his senses and conquered his heart sees the Self in all beings. Performance of duty without attachment is true renunciation.",
            shlokas: [
                {
                    verse: "5.2",
                    sanskrit: "सन्न्यासं कर्मयोगं च निःश्रेयसकरं उभम्।",
                    meaning: "Both the path of renunciation and the path of action lead to the same destination of liberation."
                },
                {
                    verse: "5.23",
                    sanskrit: "शक्नोतीहैव यः सोढुं प्राक्शरीरविमोक्षणात्।",
                    meaning: "One who can restrain the senses and maintain equanimity even in the midst of worldly affairs achieves true liberation."
                }
            ]
        },
        {
            chapter: 6,
            title: "Dhyana Yoga (ध्यान योग) - The Yoga of Meditation",
            summary: "The practices of meditation and the discipline required to control the mind and senses.",
            keyVerse: "For the yogi who has conquered the mind, the self is the ultimate friend. But to those whose mind remains uncontrolled, the self executes the role of the enemy.",
            detailed: "Krishna prescribes practical methods for meditation and mind control. He describes the ideal yogi as one who has transcended all desires and maintains equanimity in all circumstances. The chapter outlines the physical posture, breathing techniques, and mental disciplines necessary for meditation. Krishna explains that the mind is very difficult to control but can be mastered through constant practice and detachment. The supreme state is reached when the yogi meditates on the Infinite and realizes the oneness of all existence in the Supreme Being. The chapter emphasizes that yoga is not mere physical exercise but a comprehensive spiritual practice for achieving union with the Divine.",
            themes: ["Mind control", "Meditation practice", "Self-realization", "Spiritual discipline"],
            verses: 47,
            teachings: "The mind is the greatest friend but also the greatest enemy. Through practice and detachment, the mind becomes one's greatest ally in spiritual progress.",
            shlokas: [
                {
                    verse: "6.5",
                    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।",
                    meaning: "One should elevate oneself by effort, not degrade oneself. The mind is the best friend and the worst enemy."
                },
                {
                    verse: "6.26",
                    sanskrit: "यतो यतो निश्चरति मनः चञ्चलमस्थिरम्।",
                    meaning: "Wherever the restless and uncontrolled mind wanders, one should bring it back and keep it focused on the Self."
                }
            ]
        },
        {
            chapter: 7,
            title: "Jnana-Vijnana Yoga (ज्ञान-विज्ञान योग) - Knowledge of the Absolute",
            summary: "Supreme knowledge and its application. Krishna reveals his divine nature and connection with all existence.",
            keyVerse: "I am the source of all spiritual and material worlds. Everything emanates from Me. The wise who perfectly engage in My devotion and surrender all their lives and all their faculties to Me are certainly the best.",
            detailed: "Krishna reveals himself as the Supreme Absolute Reality (Para-Brahman) from which everything originates. He explains that beyond the material world of eight elements (five gross elements, mind, ego, and space), there exists his Divine energy. All beings and the entire universe rest upon this divine energy. Krishna teaches that he is the source of everything - all existence rests on him like pearls strung on a thread. This chapter presents an advanced philosophical understanding of the relationship between the Infinite and the finite. Krishna reveals that those who understand and acknowledge his divine nature achieve the highest consciousness and merge into his eternal being.",
            themes: ["Divine nature", "Universal consciousness", "Absolute Reality", "Supreme knowledge"],
            verses: 30,
            teachings: "Krishna is the Supreme Lord of all universes. Understanding Him as the goal of life and meditating on Him leads to perfect knowledge and liberation.",
            shlokas: [
                {
                    verse: "7.10",
                    sanskrit: "बीजं मां सर्वभूतानां विद्धि पार्थ सनातनम्।",
                    meaning: "I am the seed of all existence. There is no being, moving or nonmoving, that can exist without Me."
                },
                {
                    verse: "7.19",
                    sanskrit: "बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते।",
                    meaning: "After many births and deaths, at last the wise person surrenders unto Me, knowing Me to be all that is."
                }
            ]
        },
        {
            chapter: 8,
            title: "Aksara-Brahma Yoga (अक्षर-ब्रह्म योग) - The Imperishable Brahman",
            summary: "The nature of the imperishable Brahman and the importance of remembrance at the time of death.",
            keyVerse: "Whoever thinks of Me as the Imperishable, as the ultimate goal, while departing and abandoning the body will attain My Being. Of this there is no doubt.",
            detailed: "Krishna explains the nature of Brahman - the imperishable, unchangeable supreme reality. He discusses the importance of constant remembrance of the Divine and the power of one's state of mind at the time of death. The consciousness we maintain throughout life determines our destination after death. Those who fix their mind on Krishna throughout their life will naturally think of Him at the time of death and attain the Supreme. Krishna also explains the eternal cycle of manifestation and dissolution of the universe, the different paths after death based on one's consciousness, and the practices necessary for achieving liberation. The chapter emphasizes that our final destination depends entirely on our thoughts and devotion during our lifetime.",
            themes: ["Eternal consciousness", "Death and rebirth", "Remembrance of God", "Ultimate goal"],
            verses: 28,
            teachings: "Whatever state of being one remembers when he quits his body, that state he will attain. Constant remembrance and love for the Supreme ensures liberation at the time of death."
        },
        {
            chapter: 9,
            title: "Raja-Vidya-Raja-Guhya Yoga (राज-विद्या-राज-गुह्य योग) - The Royal Knowledge",
            summary: "The most secret and supreme knowledge. Krishna's mysterious presence in all beings and creation.",
            keyVerse: "I am the father of this universe, the mother, the support and the grandsire. I am the object of knowledge, the purifier and the syllable Om. I am also the Rig, the Yajur, and the Sama Vedas.",
            detailed: "This chapter reveals the supreme knowledge (Raja-Vidya) which Krishna describes as the most confidential of all teachings. Krishna reveals his role as the creator, sustainer, and dissolver of the entire universe. He declares himself as the ultimate reality from which everything emerges and into which everything returns. The chapter describes Krishna as both the material and efficient cause of creation. Krishna teaches unlimited devotion and explains that his divine glory is revealed through the natural world, yet he remains beyond it - transcendent yet immanent. The chapter emphasizes that this knowledge, being very rare and precious, should be shared only with those who possess genuine devotion and faith.",
            themes: ["Supreme reality", "Divine mystery", "Universal consciousness", "Devotion"],
            verses: 34,
            teachings: "The supreme knowledge is that all existence is an expression of Krishna's divine nature. Surrendering all actions to Krishna and worshipping Him leads to the highest perfection."
        },
        {
            chapter: 10,
            title: "Vibhuti Yoga (विभूति योग) - The Divine Glories",
            summary: "The manifestations of Krishna's divine powers in nature and all beings.",
            keyVerse: "I am the Self, O son of Kunti, situated in the hearts of all living entities. I am the beginning, the middle, and the end of all things.",
            detailed: "Krishna describes his divine manifestations (Vibhutis) throughout the universe. He reveals himself in the most excellent of all things - the sun among celestial bodies, the ocean among waters, the lion among animals, the Himalayas among mountains, and so forth. Krishna illustrates how his divine nature is expressed in various forms and creatures, making the abstract concept of the Divine comprehensible. The chapter teaches that recognizing Krishna's presence in all manifestations leads to devotion and spiritual progress. By understanding Krishna's infinite power and presence pervading the entire universe, the seeker develops genuine love and devotion. This continuous meditation on the Divine manifested in all forms leads the soul toward final liberation and eternal communion with the Divine.",
            themes: ["Divine manifestations", "God in nature", "Cosmic consciousness", "Spiritual recognition"],
            verses: 42,
            teachings: "All manifestations of beauty, power, and prosperity are expressions of Krishna's glory. Meditating on these divine manifestations awakens devotion and leads to eternal connection with the Supreme."
        },
        {
            chapter: 11,
            title: "Visvarupa-Darsana Yoga (विश्वरूप-दर्शन योग) - Vision of the Cosmic Form",
            summary: "Arjuna's direct vision of Krishna's universal form, revealing the cosmic and transcendent nature of the Divine.",
            keyVerse: "You are the imperishable, the supreme Lord, the ultimate goal of this universe. You are the unborn and the greatest personality of all time.",
            detailed: "Krishna grants Arjuna the divine vision to perceive his cosmic form (Visvarupa). Arjuna witnesses the entire universe contained within Krishna's body - all planets, stars, and creatures. This revelation shows the transcendent and infinite nature of the Divine, beyond human comprehension and imagination. Arjuna sees countless eyes, faces, and limbs, all glowing with celestial light. He witnesses the destructive aspect of Krishna, devouring all armies toward their annihilation. This terrifying yet magnificent vision overwhelms Arjuna with both fear and awe. Through this cosmic vision, Krishna demonstrates his ultimate authority and the futility of human resistance against cosmic law. After this celestial display, Krishna returns to his familiar human form to reassure Arjuna, making the infinite accessible and compassionate. This chapter shows that the Supreme Being has infinite forms and manifestations.",
            themes: ["Cosmic vision", "Universal form", "Transcendence", "Divine reality"],
            verses: 55,
            teachings: "The Supreme Lord's true form is cosmic and infinite. Those who see the universal form of God with faith and devotion attain the highest state. Fear not, for I have revealed the ultimate truth to you."
        },
        {
            chapter: 12,
            title: "Bhakti Yoga (भक्ति योग) - The Yoga of Devotion",
            summary: "The path of devotion and the supreme importance of love for the Divine.",
            keyVerse: "Fix your mind on Me, be devoted to Me, offer obeisance to Me, and thus you will come to Me. I promise you, for you are very dear to Me.",
            detailed: "Krishna elevates devotion (Bhakti) as the highest and most accessible path to liberation. While the paths of knowledge and action are important, the path of pure love and devotion stands supreme. Krishna describes the ideal devotee as one who loves Him without selfish motive, remembers Him constantly, and surrenders completely to His will. Such a devotee sees the Divine in all beings and considers all creatures as parts of the Supreme. The chapter emphasizes that devotion need not be elaborate or intellectual - sincere love and the offering of the heart are what matter most. Even a leaf, flower, or water offered with pure devotion and sincere love is accepted by the Divine. Krishna reveals that those who follow the path of devotion, having surrendered their minds and hearts completely, attain the highest benediction - eternal communion with Him.",
            themes: ["Devotion", "Love for God", "Surrender", "Divine grace"],
            verses: 20,
            teachings: "Devotion to Me, performed with all your heart and soul, is the supreme path leading to Me. Those who surrender their minds and hearts to Me attain the highest state."
        },
        {
            chapter: 13,
            title: "Ksetra-Ksetrajna Vibhaga Yoga (क्षेत्र-क्षेत्रज्ञ विभाग योग)",
            summary: "An analysis of the field (body) and the knower of the field (soul). The distinction between matter and consciousness.",
            keyVerse: "Know that which is the field as well as the knower of the field is called understanding by the learned.",
            detailed: "This chapter presents a detailed philosophical analysis distinguishing between Prakriti (matter/field) and Purusha (consciousness/knower). Krishna explains that the physical body is the field (Kshetra) and the eternal soul (Atman) is the knower of the field (Ksetrajna). Understanding this distinction is the key to enlightenment. Krishna describes the characteristics of the field - the five great elements, ego, intellect, unmanifest nature - and lists the qualities of the knower, which include humility, straightforwardness, fearlessness, and constant devotion. The soul witnesses the activities of matter but remains an eternal observer, not the doer. This understanding liberates one from the misconception that the soul is the agent of karma. Krishna emphasizes studying the scriptures and learning from wise teachers to develop this discriminative knowledge.",
            themes: ["Body and soul", "Matter and consciousness", "Discrimination", "Spiritual knowledge"],
            verses: 34,
            teachings: "The soul is the witness of the field. Understanding the distinction between matter and eternal consciousness is the key to liberation. Learn this from the wise masters."
        },
        {
            chapter: 14,
            title: "Gunatraya-Vibhaga Yoga (गुणत्रय-विभाग योग) - Understanding the Three Gunas",
            summary: "The three qualities of nature - Sattva, Rajas, and Tamas - and how they influence consciousness.",
            keyVerse: "All conditioned beings in this world are under the influence of the three modes of material nature, which are Sattva, Rajas, and Tamas.",
            detailed: "Krishna establishes the truth that the entire material world operates under three fundamental qualities of nature (Gunas): Sattva (harmony, goodness), Rajas (passion, activity), and Tamas (ignorance, inertia). Every living being and object contains these three qualities in varying proportions, and their relative dominance determines one's nature and consciousness. Sattva, when dominant, produces peace, wisdom, and purity. Rajas creates desire, craving, and activity. Tamas generates ignorance, delusion, and lethargy. The chapter describes how these qualities manifest in various aspects of life - food, activities, intelligence, and happiness. Krishna teaches that transcending these three qualities is essential for liberation. When one attains supra-conscious understanding that goes beyond the three gunas, one becomes free from the cycle of birth and death. The ultimate goal is to rise above these qualities and realize one's eternal divine nature.",
            themes: ["Three qualities", "Nature's qualities", "Transcendence", "Spiritual advancement"],
            verses: 27,
            teachings: "Understanding the three gunas and their effects allows one to rise above them. Those who transcend the three qualities attain immortality and eternal bliss."
        },
        {
            chapter: 15,
            title: "Purushottama Yoga (पुरुषोत्तम योग) - The Supreme Person",
            summary: "The vision of the eternal tree of existence and recognition of the Supreme Personality.",
            keyVerse: "The Supreme Lord is the Primeval Person and the Ultimate Truth. He is the Lord of this world and the Supreme Abode of everything.",
            detailed: "Krishna reveals the vision of the eternal tree (Ashwatha) whose roots extend upward to the divine realm and whose branches spread downward in the material world. This metaphor represents the cosmic manifestation with the transcendent reality at its source. The roots in the heavenly region, branches spreading everywhere, subbranches with senses as leaves, and fruits which are the results of karma - everything is part of this eternal tree. Those who see this tree clearly and understand its roots in the transcendent truth can escape the cycle of worldly illusion and achieve liberation. Krishna then reveals himself as the Supreme Person (Purushottama) who is beyond both the mutable (changing) and immutable (unchanging), and transcends all finite existence. He is the ultimate source from which everything emanates. Recognizing and worshipping this Supreme personality leads to eternal liberation from the cycle of birth and death.",
            themes: ["Eternal tree", "Cosmic manifestation", "Supreme Lord", "Transcendent reality"],
            verses: 20,
            teachings: "One who understands that Krishna is the Supreme Person beyond the material world and recognizes Him as the source of all existence achieves the highest perfection and returns to His eternal abode."
        },
        {
            chapter: 16,
            title: "Daivasura-Sampad-Vibhaga Yoga (दैवासुर-संपद्-विभाग योग)",
            summary: "The distinction between divine and demonic qualities, and their effects on one's spiritual progress.",
            keyVerse: "Fearlessness, purity of heart, steadfastness in knowledge and meditation, charity, control of senses, performance of sacrifice, study of scriptures, austerity, and sincerity are the qualities of those endowed with divine nature.",
            detailed: "Krishna delineates the qualities that characterize divine nature and those that characterize demonic nature. Divine qualities include fearlessness, purity, wisdom, charity, self-control, honesty, and devotion to God. These qualities lead to liberation and eternal happiness. Demonic qualities, in contrast, include desire for domination, arrogance, excessive pride, anger, harshness, and ignorance of righteousness. Those possessed by demonic qualities engage in sinful deeds, cruelty, and oppression of others. They deny the existence of God and the moral order of the universe. Their lives become increasingly miserable, and they gradually descend into lower forms of existence. Krishna emphasizes that developing divine qualities is essential for spiritual progress. By cultivating goodness, honesty, service to others, and devotion to the Divine, one cleanses the mind and heart and progresses toward enlightenment. The chapter concludes that scripture is the guide for understanding what should be done and what should not be done.",
            themes: ["Divine qualities", "Demonic qualities", "Moral order", "Spiritual growth"],
            verses: 24,
            teachings: "Cultivate divine qualities and renounce demonic tendencies. Those with divine nature move toward liberation while those with demonic nature sink lower. Follow the scriptures as your guide."
        },
        {
            chapter: 17,
            title: "Sraddhatraya-Vibhaga Yoga (श्रद्धात्रय-विभाग योग) - The Threefold Faith",
            summary: "The three types of faith and how one's nature determines the kind of spiritual practice suitable for them.",
            keyVerse: "The faith of each is in accordance with his nature. The human being consists of faith, and whatever his faith is, indeed so he is.",
            detailed: "Krishna teaches that all beings possess faith (Shraddha) of some kind, and the nature of one's faith determines one's spiritual path and ultimate destination. He describes three types of faith corresponding to the three gunas: Sattvic faith leads to worship of the Divine and righteous beings; Rajasic faith leads to worship of power and prestige; Tamasic faith leads to worship of spirits and demonic forces. Krishna similarly categorizes food, sacrifice, austerity, and charity into three types based on the gunas. Sattvic practices purify the mind and lead toward liberation. Rajasic practices produce temporary benefits but increase desires and attachments. Tamasic practices cause delusion and harm. The chapter emphasizes that whatever type of faith one has determines one's spiritual journey and ultimate state. By understanding one's nature and practising accordingly, one can gradually elevate faith from lower to higher forms. The ultimate goal is to develop supreme faith in the Divine and practice devotion with complete surrender.",
            themes: ["Three types of faith", "Nature of persons", "Sacrifice and austerity", "Spiritual elevation"],
            verses: 28,
            teachings: "Faith is the foundation of spiritual life. Develop Sattvic faith through righteous living, study of scriptures, and devotion to the Divine. Your faith determines your spiritual destiny."
        },
        {
            chapter: 18,
            title: "Moksa-Sannyasa Yoga (मोक्ष-सन्यास योग) - Liberation through Renunciation",
            summary: "The conclusion of the Gita. The importance of duty, surrender, and the path to eternal liberation.",
            keyVerse: "Abandon all varieties of religion and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
            detailed: "The final chapter brings the Bhagavad Gita to its magnificent conclusion. Krishna defines perfect renunciation (Sannyasa) as the renunciation of results rather than the abandonment of all activity. True freedom comes through understanding that all actions are performed by the three gunas of nature, not by the individual soul. The individual should act as an instrument in the hands of the Divine, dedicating all fruits to Him. Krishna summarizes the entire teaching through the concept of Yoga - the union of the individual soul with the Supreme. He reveals that there is no action on Earth that can cause higher benefit than performance of duty (Svadharma). Krishna's ultimate message is that one should surrender completely to Him, renouncing all other considerations and obligations. He promises to free the surrendered soul from all sinful reactions and grant immortal bliss. The chapter concludes with the vision of a supreme discipline where understanding one's role in the cosmic order and performing it with complete faith and devotion leads to eternal liberation from the cycle of birth and death.",
            themes: ["Renunciation", "Duty", "Surrender", "Liberation", "Ultimate truth"],
            verses: 78,
            teachings: "Perform your duty without attachment to the results. Surrender all your actions to the Divine and take complete refuge in Krishna. This is the path to eternal liberation and supreme bliss."
        }
    ],
    hi: [
        {
            chapter: 1,
            title: "अर्जुन विषाद योग (अर्जुन का दुविधा)",
            summary: "अर्जुन युद्धभूमि पर अपने रिश्तेदारों को देखकर दुखी हो जाता है और युद्ध करने से मना कर देता है।",
            keyVerse: "मैं अपने कुटुम्बियों को मारने में कोई भलाई नहीं देखता।",
            detailed: "यह अध्याय भगवद गीता की नींव रखता है। अर्जुन युद्धभूमि में भीष्म पितामह, द्रोण आचार्य और अन्य रिश्तेदारों को देखकर करुणा में पूरी तरह डूब जाता है।",
            themes: ["धर्म", "भावनात्मक द्वंद्व", "पारिवारिक बंधन"],
            verses: 47,
            teachings: "अपने कर्तव्य को समझना और भावनात्मक आसक्ति से न डिगना।"
        },
        {
            chapter: 2,
            title: "सांख्य योग (विश्लेषण योग)",
            summary: "कृष्ण गहन शिक्षाएं देना शुरू करते हैं और आत्मा की नित्य प्रकृति को समझाते हैं।",
            keyVerse: "आपको केवल कर्म करने का अधिकार है, फल में नहीं।",
            detailed: "इस अध्याय में कृष्ण आत्मा की नित्य, अचल और अमर प्रकृति को समझाते हैं। शरीर नश्वर है लेकिन आत्मा सदा अविनाशी रहती है।",
            themes: ["आत्मा की नित्यता", "कर्तव्य", "अनासक्ति", "मुक्ति के मार्ग"],
            verses: 72,
            teachings: "आत्मा नित्य और अमर है। कर्म पर ध्यान दो, फल पर नहीं।"
        },
        {
            chapter: 3,
            title: "कर्मयोग (कर्म का योग)",
            summary: "निष्काम कर्म का मार्ग और कर्तव्य पालन का महत्व।",
            keyVerse: "अपना कर्तव्य निष्ठापूर्वक करो और फल की आसक्ति त्याग दो।",
            detailed: "कृष्ण समझाते हैं कि कर्म का त्याग करना समाधान नहीं है, बल्कि फल की असक्ति रखते हुए कर्म करना चाहिए।",
            themes: ["निष्काम कर्म", "कर्तव्य", "प्रकृति और स्वभाव", "सृष्टि का चक्र"],
            verses: 43,
            teachings: "अपना कर्तव्य अपूर्ण रूप से करना दूसरे का कर्तव्य पूर्ण रूप से करने से बेहतर है।"
        },
        {
            chapter: 4,
            title: "ज्ञान-कर्म-सन्यास योग",
            summary: "ज्ञान, कर्म और सन्यास का संयोजन। कृष्ण का दिव्य संदेश।",
            keyVerse: "जिसने ज्ञान से अपनी संदेह को दूर कर दिया है, वह कर्म से बंधा नहीं है।",
            detailed: "कृष्ण अपने अवतारों का वर्णन करते हैं। वे ज्ञान (विवेक) के सर्वोच्च महत्व को समझाते हैं।",
            themes: ["दिव्य अवतार", "सर्वोच्च ज्ञान", "आध्यात्मिक विवेक", "अतिक्रमण"],
            verses: 42,
            teachings: "आत्म-ज्ञान ही सर्वश्रेष्ठ यज्ञ है। ज्ञानवान सभी प्राणियों को समान दृष्टि से देखता है।"
        },
        {
            chapter: 5,
            title: "कर्म-सन्यास योग (कर्म के माध्यम से सन्यास)",
            summary: "सन्यास और कर्म का समन्वय। दोनों ही एक ही लक्ष्य की ओर ले जाते हैं।",
            keyVerse: "ज्ञानवान इंद्रियों को नियंत्रण में रखते हुए समभाव से कर्म करता है।",
            detailed: "यह अध्याय सन्यास और निष्काम कर्म को समान दिखाता है लेकिन गृहस्थ के लिए कर्मयोग श्रेष्ठ है।",
            themes: ["समन्वय", "मानसिक सन्यास", "समभाव", "दिव्य आत्मसमर्पण"],
            verses: 29,
            teachings: "जिस योगी ने अपनी इंद्रियों को जीत लिया है, वह सभी प्राणियों में आत्मा को देखता है।"
        },
        {
            chapter: 6,
            title: "ध्यान योग (ध्यान का योग)",
            summary: "ध्यान की प्रणाली और मन तथा इंद्रियों पर नियंत्रण।",
            keyVerse: "जिस योगी ने मन को जीत लिया है, उसके लिए आत्मा सबसे बड़ा मित्र है।",
            detailed: "कृष्ण ध्यान के व्यावहारिक तरीके बताते हैं। आदर्श योगी वह है जिसने सभी इच्छाओं को पार कर लिया है।",
            themes: ["मन नियंत्रण", "ध्यान अभ्यास", "आत्म-साक्षरण", "आध्यात्मिक अनुशासन"],
            verses: 47,
            teachings: "मन सबसे बड़ा मित्र और सबसे बड़ा शत्रु है। अभ्यास से यह सर्वश्रेष्ठ साथी बन जाता है।"
        },
        {
            chapter: 7,
            title: "ज्ञान-विज्ञान योग (परम ज्ञान)",
            summary: "सर्वोच्च ज्ञान और उसका अनुप्रयोग। कृष्ण का दिव्य स्वरूप।",
            keyVerse: "मैं सभी आध्यात्मिक और भौतिक जगत का स्रोत हूँ।",
            detailed: "कृष्ण अपने परा-ब्रह्म स्वरूप को प्रकट करते हैं। सब कुछ उन्ही से निकलता है।",
            themes: ["दिव्य प्रकृति", "सार्वभौमिक चेतना", "परम वास्तविकता", "सर्वोच्च ज्ञान"],
            verses: 30,
            teachings: "कृष्ण सभी ब्रह्मांड के परमप्रभु हैं। उन्हें समझना ही जीवन का लक्ष्य है।"
        },
        {
            chapter: 8,
            title: "अक्षर-ब्रह्म योग (अविनाशी ब्रह्म)",
            summary: "अविनाशी ब्रह्म का स्वरूप और मृत्यु के समय स्मरण का महत्व।",
            keyVerse: "जो अविनाशी परब्रह्म को स्मरण करते हुए शरीर त्यागता है, वह मुझे प्राप्त होता है।",
            detailed: "कृष्ण ब्रह्म की अविनाशी स्वरूप को बताते हैं। मृत्यु के समय जो मन का अवस्था रहता है, वही गंतव्य निर्धारित करता है।",
            themes: ["शाश्वत चेतना", "जन्म-मृत्यु", "ईश्वर का स्मरण", "परम लक्ष्य"],
            verses: 28,
            teachings: "मृत्यु के समय जिस अवस्था में विचार रहता है, वही आखिरी गंतव्य है।"
        },
        {
            chapter: 9,
            title: "राज-विद्या-राज-गुह्य योग (राज ज्ञान)",
            summary: "सर्वश्रेष्ठ और रहस्यमय ज्ञान। कृष्ण की दिव्य उपस्थिति।",
            keyVerse: "मैं इस संपूर्ण ब्रह्मांड का पिता, माता, पालक और दादा हूँ।",
            detailed: "यह अध्याय सर्वश्रेष्ठ ज्ञान (राज-विद्या) को प्रकट करता है। कृष्ण स्वयं को संपूर्ण ब्रह्मांड का निर्माता, पालक और विनाशक बताते हैं।",
            themes: ["परम वास्तविकता", "दिव्य रहस्य", "सार्वभौमिक चेतना", "भक्ति"],
            verses: 34,
            teachings: "सर्वोच्च ज्ञान यह है कि सब कुछ कृष्ण का दिव्य स्वरूप है।"
        },
        {
            chapter: 10,
            title: "विभूति योग (दिव्य प्रभाव)",
            summary: "कृष्ण के दिव्य प्रभावों का प्रकटीकरण।",
            keyVerse: "मैं सभी प्राणियों के हृदय में बैठा हूँ। मैं सभी का आदि, मध्य और अंत हूँ।",
            detailed: "कृष्ण अपनी दिव्य प्रभावों (विभूतियों) का वर्णन सूर्य, समुद्र, शेर, हिमालय आदि सर्वश्रेष्ठ वस्तुओं में करते हैं।",
            themes: ["दिव्य प्रभाव", "प्रकृति में ईश्वर", "ब्रह्मांडीय चेतना", "आध्यात्मिक स्वीकृति"],
            verses: 42,
            teachings: "सौंदर्य, शक्ति और समृद्धि के सभी प्रकटीकरण कृष्ण की महिमा हैं।"
        },
        {
            chapter: 11,
            title: "विश्वरूप-दर्शन योग (ब्रह्मांडीय रूप)",
            summary: "अर्जुन का कृष्ण के विश्वरूप का सीधा दर्शन।",
            keyVerse: "आप अविनाशी, परमप्रभु, इस संपूर्ण जगत का अंतिम लक्ष्य हैं।",
            detailed: "कृष्ण अर्जुन को अपना विश्वरूप (ब्रह्मांडीय रूप) दिखाते हैं। अर्जुन पूरे ब्रह्मांड को कृष्ण के शरीर में देखता है।",
            themes: ["ब्रह्मांडीय दर्शन", "सार्वभौमिक रूप", "पारमार्थिकता", "दिव्य वास्तविकता"],
            verses: 55,
            teachings: "परमप्रभु का सच्चा रूप ब्रह्मांडीय और अनंत है।"
        },
        {
            chapter: 12,
            title: "भक्ति योग (भक्ति का योग)",
            summary: "भक्तिमार्ग और भक्ति की सर्वोच्च प्रधानता।",
            keyVerse: "अपना मन मुझ पर लगाओ, मेरे प्रति समर्पित रहो और मुझे नमस्कार करो।",
            detailed: "कृष्ण भक्ति को सर्वोच्च और सबसे सुलभ मार्ग बताते हैं। ज्ञान और कर्म महत्वपूर्ण हैं लेकिन शुद्ध प्रेम उन सभी से श्रेष्ठ है।",
            themes: ["भक्ति", "ईश्वर से प्रेम", "आत्मसमर्पण", "दिव्य कृपा"],
            verses: 20,
            teachings: "पूर्ण हृदय से मेरी भक्ति करो - यही परम मार्ग है।"
        },
        {
            chapter: 13,
            title: "क्षेत्र-क्षेत्रज्ञ विभाग योग",
            summary: "क्षेत्र (शरीर) और क्षेत्रज्ञ (आत्मा) का विश्लेषण।",
            keyVerse: "क्षेत्र को जानो और क्षेत्रज्ञ को भी जानो - यही ज्ञान है।",
            detailed: "यह अध्याय प्रकृति (क्षेत्र/शरीर) और चेतना (क्षेत्रज्ञ/आत्मा) के बीच अंतर बताता है।",
            themes: ["शरीर और आत्मा", "प्रकृति और चेतना", "विवेक", "आध्यात्मिक ज्ञान"],
            verses: 34,
            teachings: "आत्मा क्षेत्र का साक्षी है। प्रकृति और शाश्वत चेतना के बीच भेद समझना मुक्ति की कुंजी है।"
        },
        {
            chapter: 14,
            title: "गुणत्रय-विभाग योग (तीन गुणों को समझना)",
            summary: "प्रकृति के तीन गुण - सत्व, रज और तम।",
            keyVerse: "सत्व, रज और तम - ये तीन गुण प्रकृति के हैं।",
            detailed: "कृष्ण समझाते हैं कि प्रकृति के तीन गुण हैं - सत्व (शुद्धि), रज (बुराई) और तम (अज्ञान)।",
            themes: ["तीन गुण", "प्रकृति की गुणवत्ता", "उत्तरणता", "आध्यात्मिक उन्नति"],
            verses: 27,
            teachings: "तीन गुणों को समझने से उन्हें पार किया जा सकता है।"
        },
        {
            chapter: 15,
            title: "पुरुषोत्तम योग (परमपुरुष)",
            summary: "शाश्वत वृक्ष का दर्शन और परमप्रभु की स्वीकृति।",
            keyVerse: "परमप्रभु परमपुरुष हैं और सभी वस्तु का अंतिम लक्ष्य हैं।",
            detailed: "कृष्ण शाश्वत वृक्ष (अश्वत्थ) का वर्णन करते हैं जिसकी जड़ें ऊपर की ओर और शाखाएं नीचे की ओर हैं।",
            themes: ["शाश्वत वृक्ष", "ब्रह्मांडीय प्रकटीकरण", "परमप्रभु", "परमार्थ वास्तविकता"],
            verses: 20,
            teachings: "जो समझता है कि कृष्ण परमपुरुष हैं और सभी का स्रोत हैं, वह सर्वोच्च सिद्धि प्राप्त करता है।"
        },
        {
            chapter: 16,
            title: "दैवासुर-संपद्-विभाग योग",
            summary: "दिव्य और दानवीय गुणों का भेद।",
            keyVerse: "निर्भयता, चित्त की शुद्धि, ज्ञान-ध्यान में स्थिरता, दान, इंद्रिय संयम... ये दिव्य गुण हैं।",
            detailed: "कृष्ण दिव्य और दानवीय गुणों को अलग करते हैं। दिव्य गुणों से मुक्ति और सुख मिलता है।",
            themes: ["दिव्य गुण", "दानवीय गुण", "नैतिक आदेश", "आध्यात्मिक विकास"],
            verses: 24,
            teachings: "दिव्य गुणों का विकास करो और दानवीय गुणों को त्यागो।"
        },
        {
            chapter: 17,
            title: "श्रद्धात्रय-विभाग योग (तीन प्रकार की श्रद्धा)",
            summary: "तीन प्रकार की श्रद्धा और उनका महत्व।",
            keyVerse: "श्रद्धा ही प्रत्येक मनुष्य का स्वरूप है। जैसी उसकी श्रद्धा है, वैसा ही वह है।",
            detailed: "कृष्ण समझाते हैं कि प्रत्येक मनुष्य में श्रद्धा (विश्वास) होती है और उसकी श्रद्धा का प्रकार उसके स्वभाव के अनुसार होता है।",
            themes: ["तीन प्रकार की श्रद्धा", "व्यक्तित्व का प्रकार", "यज्ञ और तपस्या", "आध्यात्मिक उन्नयन"],
            verses: 28,
            teachings: "श्रद्धा आध्यात्मिक जीवन की नींव है। सात्विक श्रद्धा विकसित करो।"
        },
        {
            chapter: 18,
            title: "मोक्ष-सन्यास योग (मुक्ति द्वारा सन्यास)",
            summary: "गीता का समापन। कर्तव्य, समर्पण और मुक्ति का मार्ग।",
            keyVerse: "सभी धर्मों को छोड़कर मेरी शरण में आ जाओ। मैं तुम्हें सभी पापों से मुक्त कर दूँगा।",
            detailed: "गीता के अंतिम अध्याय में कृष्ण पूरी शिक्षा को समाहित करते हैं। सच्चा सन्यास कर्मों का त्याग नहीं, बल्कि फल की आसक्ति का त्याग है।",
            themes: ["सन्यास", "कर्तव्य", "समर्पण", "मुक्ति", "परम सत्य"],
            verses: 78,
            teachings: "अपना कर्तव्य फल की चिंता छोड़कर करो। सभी कर्मों को कृष्ण को समर्पित करते हुए पूर्ण आस्था से समर्पण कर दो।"
        }
    ]
};

