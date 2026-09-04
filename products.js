// =========================================
// সেন্ট্রাল প্রোডাক্ট ডেটাবেস (Central Product DB)
// =========================================

window.productsDB = {
    // ডিসপ্লে বা কম্বো প্রোডাক্ট
    "900 taka": {
        name: "combo",
        price: "৳ 900",
        image: "image/display/1.jpg",
        description: "বড় দাঁতের এই চন্দন কাঠের চিরুনি চুলের জট ছাড়াতে এবং চুল পড়া কমাতে দারুণ কার্যকরী।"
    },

    // চিরুনি (Combs)
    "wide-comb": {
        name: "Sandalwood Extra Wide Teeth Comb",
        price: "৳ ৩৫০",
        image: "image/Comb/Sandalwood extra wide teeth comb.jpg",
        description: "বড় দাঁতের এই চন্দন কাঠের চিরুনি চুলের জট ছাড়াতে এবং চুল পড়া কমাতে দারুণ কার্যকরী।",
        reviews: [
            "image/Comb/review/rvw1.png", "image/Comb/review/rvw2.png", "image/Comb/review/rvw3.png", 
            "image/Comb/review/rvw4.png", "image/Comb/review/rvw5.png", "image/Comb/review/rvw6.png", 
            "image/Comb/review/rvw7.png", "image/Comb/review/rvw8.png", "image/Comb/review/rvw9.png", "image/Comb/review/rvw10.png"
        ]
    },
    "narrow-comb": {
        name: "Sandalwood Narrow Teeth Comb",
        price: "৳ ৩২০",
        image: "image/Comb/Sandalwood narrow teeth comb.jpg",
        description: "নরমাল চুল সাজানোর জন্য ১০০% আসল চন্দন কাঠের চিকন দাঁতের চিরুনি।",
        reviews: [
            "image/Comb/review/rvw1.png", "image/Comb/review/rvw2.png", "image/Comb/review/rvw3.png", 
            "image/Comb/review/rvw4.png", "image/Comb/review/rvw5.png", "image/Comb/review/rvw6.png", 
            "image/Comb/review/rvw7.png", "image/Comb/review/rvw8.png", "image/Comb/review/rvw9.png", "image/Comb/review/rvw10.png"
        ]
    },
    "peach-comb": {
        name: "Peach Wood Comb",
        price: "৳ ২৫০",
        image: "image/Comb/Peach wood (1).jpg",
        description: "পিচ কাঠের তৈরি এই চিরুনি স্ক্যাল্পের স্বাস্থ্য ভালো রাখে এবং চুল মসৃণ করে।",
        reviews: [
            "image/Comb/review/rvw1.png", "image/Comb/review/rvw2.png", "image/Comb/review/rvw3.png", 
            "image/Comb/review/rvw4.png", "image/Comb/review/rvw5.png", "image/Comb/review/rvw6.png", 
            "image/Comb/review/rvw7.png", "image/Comb/review/rvw8.png", "image/Comb/review/rvw9.png", "image/Comb/review/rvw10.png"
        ]
    },
    "peach-comb-1": {
        name: "Peach Wood Comb 1",
        price: "৳ 3৫০",
        image: "image/Comb/Peach wood (2).jpg",
        description: "পিচ কাঠের তৈরি এই চিরুনি স্ক্যাল্পের স্বাস্থ্য ভালো রাখে এবং চুল মসৃণ করে।",
        reviews: [
            "image/Comb/review/rvw1.png", "image/Comb/review/rvw2.png", "image/Comb/review/rvw3.png"
        ]
    },
    "peach-comb-2": {
        name: "Peach Wood Comb 2",
        price: "৳ ৫০",
        image: "image/Comb/Peach wood (3).jpg",
        description: "পিচ কাঠের তৈরি এই চিরুনি স্ক্যাল্পের স্বাস্থ্য ভালো রাখে এবং চুল মসৃণ করে।"
    },
    "peach-comb-3": {
        name: "Peach Wood Comb 3",
        price: "৳ 1৫০",
        image: "image/Comb/Peach wood (4).jpg",
        description: "পিচ কাঠের তৈরি এই চিরুনি স্ক্যাল্পের স্বাস্থ্য ভালো রাখে এবং চুল মসৃণ করে।"
    },

    // তেল (Oils)
    "magic-oil": {
        name: "Magic Essence Hair Oil",
        price: "৳ ৩০০",
        image: "image/oil/Magic essence hair oil.jpg",
        description: "চুলকে গোড়া থেকে মজবুত করতে এবং দ্রুত বৃদ্ধিতে সহায়তা করে ম্যাজিক এসেন্স হেয়ার অয়েল।"
    },
    "root-oil": {
        name: "Root Care Herbal Essence Hair Oil",
        price: "৳ ৩২০",
        image: "image/oil/Root care herbal essence hair oil.jpg",
        description: "বিশেষভাবে রুক্ষ ও ড্যামেজ চুলের যত্ন নিতে তৈরি রুট কেয়ার হারবাল হেয়ার অয়েল।"
    },
    "silk-oil": {
        name: "Silk Secret Shine Therapy Hair Oil",
        price: "৳ ৩৫০",
        image: "image/oil/Silk secret shine therapy hair oil.jpg",
        description: "চুলের সিল্কি ভাব ধরে রাখতে এবং ন্যাচারাল সাইন ফিরিয়ে আনতে সিল্ক সিক্রেট অয়েল।"
    },

    // হেয়ার প্যাক (Hair Packs)
    "aloevera-pack": {
        name: "Aloevera Hair Pack",
        price: "৳ ২০০",
        image: "image/hair pack/aloevera hair pack.jpg",
        description: "অ্যালোভেরার প্রাকৃতিক পুষ্টিতে ভরপুর যা স্ক্যাল্পকে ঠান্ডা রাখে এবং খুশকি দূর করে।"
    },
    "beetroot-pack": {
        name: "Beetroot Hair Pack",
        price: "৳ ২০০",
        image: "image/hair pack/beetroot hair pack.jpg",
        description: "বিটরুটের নির্যাস যুক্ত যা চুলে প্রাকৃতিক লালচে আভা আনে এবং পুষ্টি জোগায়।"
    },
    "chlorophyll-pack": {
        name: "Chlorophyll Hair Pack",
        price: "৳ ২২০",
        image: "image/hair pack/chlorophyll hair pack.jpg",
        description: "ক্লোরোফিলের শক্তি দিয়ে চুলের গোড়া শক্ত করে এবং অকালে চুল পাকা রোধ করে।"
    },
    "mehedi-pack": {
        name: "Mehedi Hair Pack",
        price: "৳ ১৫০",
        image: "image/hair pack/mehedi hair pack.jpg",
        description: "১০০% খাঁটি মেহেদী পাতার গুঁড়ো, যা চুলে চমৎকার রং এবং সিল্কি ভাব নিয়ে আসে।"
    }
};