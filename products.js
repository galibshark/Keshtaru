// =========================================
// সেন্ট্রাল প্রোডাক্ট ডেটাবেস (Central Product DB)
// =========================================

window.productsDB = {
    
    // ==========================================
    // Category: Display Combos
    // ==========================================

        "combo-1": {
            name: "Hair Care Combo 1",
            price: "৳ 900",
            image: "image/display/1.jpg",
            description: "চুলের সম্পূর্ণ যত্নের জন্য আমাদের স্পেশাল কম্বো প্যাক ১।"
        },
        
        "combo-2": {
            name: "Hair Care Combo 2",
            price: "৳ 1000",
            image: "image/display/2.jpg",
            description: "চুল পড়া রোধ এবং নতুন চুল গজাতে সাহায্য করার স্পেশাল কম্বো প্যাক ২।"
        },
        
        "combo-3": {
            name: "Hair Care Combo 3",
            price: "৳ 600",
            image: "image/display/3.jpg",
            description: "খুশকি দূর করতে এবং চুলকে সিল্কি করতে স্পেশাল কম্বো প্যাক ৩।"
        },
        
        "combo-4": {
            name: "Hair Care Combo 4",
            price: "৳ 660",
            image: "image/display/4.jpg",
            description: "চুলের গোড়া মজবুত করতে স্পেশাল কম্বো প্যাক ৪।"
        },
        
        "combo-5": {
            name: "Hair Care Combo 5",
            price: "৳ 750",
            image: "image/display/5.jpg",
            description: "রেগুলার হেয়ার কেয়ারের জন্য আমাদের স্পেশাল কম্বো প্যাক ৫।"
        },
        
        "combo-6": {
            name: "Hair Care Combo 6",
            price: "৳ 940",
            image: "image/display/6.jpg",
            description: "বাজেটের মধ্যে সেরা হেয়ার কেয়ার স্পেশাল কম্বো প্যাক ৬।"
        },

    
    
        // চিরুনি (Combs)
        "wide-comb": {
            name: "Sandalwood Extra Wide Teeth Comb",
            price: "৳ 560",
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
            price: "৳ 470",
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
            price: "৳ 230",
            image: "image/Comb/Peach wood.jpg",
            description: "পিচ কাঠের তৈরি এই চিরুনি স্ক্যাল্পের স্বাস্থ্য ভালো রাখে এবং চুল মসৃণ করে।",
            reviews: [
                "image/Comb/review/rvw1.png", "image/Comb/review/rvw2.png", "image/Comb/review/rvw3.png", 
                "image/Comb/review/rvw4.png", "image/Comb/review/rvw5.png", "image/Comb/review/rvw6.png", 
                "image/Comb/review/rvw7.png", "image/Comb/review/rvw8.png", "image/Comb/review/rvw9.png", "image/Comb/review/rvw10.png"
            ]
        },
        "peach-comb-1": {
            name: "Peach Wood narrow teeth comb",
            price: "৳ 230",
            image: "image/Comb/Peach wood narrow.jpg",
            description: "পিচ কাঠের তৈরি এই চিরুনি স্ক্যাল্পের স্বাস্থ্য ভালো রাখে এবং চুল মসৃণ করে।",
            reviews: [
                "image/Comb/review/rvw1.png", "image/Comb/review/rvw2.png", "image/Comb/review/rvw3.png"
            ]
        },
        "peach-comb-2": {
            name: "Peach Wood wide teeth comb",
            price: "৳ 230",
            image: "image/Comb/Peach wood wide.jpg",
            description: "পিচ কাঠের তৈরি এই চিরুনি স্ক্যাল্পের স্বাস্থ্য ভালো রাখে এবং চুল মসৃণ করে।"
        },
        
    // তেল (Oils)
        "magic-oil": {
            name: "Magic Essence Hair Oil(100ml)",
            price: "৳ 220",
            image: "image/oil/Magic essence hair oil.jpg",
            description: "চুলকে গোড়া থেকে মজবুত করতে এবং দ্রুত বৃদ্ধিতে সহায়তা করে ম্যাজিক এসেন্স হেয়ার অয়েল।"
        },
        "root-oil": {
            name: "Root Care Herbal Essence Hair Oil(100ml)",
            price: "৳ 290",
            image: "image/oil/Root care herbal essence hair oil.jpg",
            description: "বিশেষভাবে রুক্ষ ও ড্যামেজ চুলের যত্ন নিতে তৈরি রুট কেয়ার হারবাল হেয়ার অয়েল।"
        },
        "silk-oil": {
            name: "Silk Secret Shine Therapy Hair Oil(100ml)",
            price: "৳ 220",
            image: "image/oil/Silk secret shine therapy hair oil.jpg",
            description: "চুলের সিল্কি ভাব ধরে রাখতে এবং ন্যাচারাল সাইন ফিরিয়ে আনতে সিল্ক সিক্রেট অয়েল।"
        },

    // হেয়ার প্যাক (Hair Packs)
        "aloevera-pack": {
            name: "Aloevera Hair Pack(100gm)",
            price: "৳ 200",
            image: "image/hair pack/aloevera hair pack.jpg",
            description: "অ্যালোভেরার প্রাকৃতিক পুষ্টিতে ভরপুর যা স্ক্যাল্পকে ঠান্ডা রাখে এবং খুশকি দূর করে।"
        },
        "beetroot-pack": {
            name: "Beetroot Hair Pack(100gm)",
            price: "৳ 250",
            image: "image/hair pack/beetroot hair pack.jpg",
            description: "বিটরুটের নির্যাস যুক্ত যা চুলে প্রাকৃতিক লালচে আভা আনে এবং পুষ্টি জোগায়।"
        },
        "chlorophyll-pack": {
            name: "Chlorophyll Hair Pack(100gm)",
            price: "৳ 130",
            image: "image/hair pack/chlorophyll hair pack.jpg",
            description: "ক্লোরোফিলের শক্তি দিয়ে চুলের গোড়া শক্ত করে এবং অকালে চুল পাকা রোধ করে।"
        },
        "mehedi-pack": {
            name: "Mehedi Hair Pack(100gm)",
            price: "৳ 150",
            image: "image/hair pack/mehedi hair pack.jpg",
            description: "১০০% খাঁটি মেহেদী পাতার গুঁড়ো, যা চুলে চমৎকার রং এবং সিল্কি ভাব নিয়ে আসে।"
    },
    
    //Satin scrunchies
    
        "darkgreen-scrunchie": {
            name: "Dark Green Satin Scrunchie",
            price: "৳ S-25, M-50",
            image: "image/Satin scrunchies/dark green.jpg",
            description: "চুলের সুরক্ষায় এবং ফ্যাশনে নতুন মাত্রা যোগ করতে প্রিমিয়াম কোয়ালিটির স্যাটিন স্ক্রাঞ্চি। সাধারণ রাবার ব্যান্ডের মতো এটি চুলে জট পাকায় না বা চুল ছিঁড়ে ফেলে না। সারাদিন ব্যবহারের পরও আপনার চুল থাকবে সুরক্ষিত, আরামদায়ক এবং স্টাইলিশ।"
        },
        
        "gold-scrunchie": {
            name: "Gold Satin Scrunchie",
            price: "৳  S-25, M-50",
            image: "image/Satin scrunchies/gold.jpg",
            description: "চুলের সুরক্ষায় এবং ফ্যাশনে নতুন মাত্রা যোগ করতে প্রিমিয়াম কোয়ালিটির স্যাটিন স্ক্রাঞ্চি। সাধারণ রাবার ব্যান্ডের মতো এটি চুলে জট পাকায় না বা চুল ছিঁড়ে ফেলে না। সারাদিন ব্যবহারের পরও আপনার চুল থাকবে সুরক্ষিত, আরামদায়ক এবং স্টাইলিশ।"
        },
        
        "lightpink-scrunchie": {
            name: "Light Pink Satin Scrunchie",
            price: "৳  S-25, M-50",
            image: "image/Satin scrunchies/light pink.jpg",
            description:"চুলের সুরক্ষায় এবং ফ্যাশনে নতুন মাত্রা যোগ করতে প্রিমিয়াম কোয়ালিটির স্যাটিন স্ক্রাঞ্চি। সাধারণ রাবার ব্যান্ডের মতো এটি চুলে জট পাকায় না বা চুল ছিঁড়ে ফেলে না। সারাদিন ব্যবহারের পরও আপনার চুল থাকবে সুরক্ষিত, আরামদায়ক এবং স্টাইলিশ।"
        },
        
        "maroon-scrunchie": {
            name: "Maroon Satin Scrunchie",
            price: "৳  S-25, M-50",
            image: "image/Satin scrunchies/maroon.jpg",
            description: "চুলের সুরক্ষায় এবং ফ্যাশনে নতুন মাত্রা যোগ করতে প্রিমিয়াম কোয়ালিটির স্যাটিন স্ক্রাঞ্চি। সাধারণ রাবার ব্যান্ডের মতো এটি চুলে জট পাকায় না বা চুল ছিঁড়ে ফেলে না। সারাদিন ব্যবহারের পরও আপনার চুল থাকবে সুরক্ষিত, আরামদায়ক এবং স্টাইলিশ।"
        },
        
        "rust-scrunchie": {
            name: "Rust Satin Scrunchie",
            price: "৳  S-25, M-50",
            image: "image/Satin scrunchies/rust.jpg",
            description:"চুলের সুরক্ষায় এবং ফ্যাশনে নতুন মাত্রা যোগ করতে প্রিমিয়াম কোয়ালিটির স্যাটিন স্ক্রাঞ্চি। সাধারণ রাবার ব্যান্ডের মতো এটি চুলে জট পাকায় না বা চুল ছিঁড়ে ফেলে না। সারাদিন ব্যবহারের পরও আপনার চুল থাকবে সুরক্ষিত, আরামদায়ক এবং স্টাইলিশ।"
        },
        
        
    // Category: Satin Pillow Cover
        "black-pillowcover": {
            name: "Black Satin Pillow Cover",
            price: "৳ 350",
            image: "image/Satin pillow cover/black.jpg",
            description: "চুল পড়া রোধ এবং ত্বকের যত্নে প্রিমিয়াম স্যাটিন পিলোকভার। এটি সাধারণ সুতির বালিশের কভারের মতো আপনার চুল ও ত্বকের প্রাকৃতিক আর্দ্রতা শুষে নেয় না। রাতে ঘুমানোর সময় ঘর্ষণ কমিয়ে চুলকে রাখে জটমুক্ত, সিল্কি এবং ত্বককে রাখে সুরক্ষিত।"
        },
        
        "gold-pillowcover": {
            name: "Gold Satin Pillow Cover",
            price: "৳ 350",
            image: "image/Satin pillow cover/gold.jpg",
            description: "চুল পড়া রোধ এবং ত্বকের যত্নে প্রিমিয়াম স্যাটিন পিলোকভার। এটি সাধারণ সুতির বালিশের কভারের মতো আপনার চুল ও ত্বকের প্রাকৃতিক আর্দ্রতা শুষে নেয় না। রাতে ঘুমানোর সময় ঘর্ষণ কমিয়ে চুলকে রাখে জটমুক্ত, সিল্কি এবং ত্বককে রাখে সুরক্ষিত।"
        },
        
        "peach-pillowcover": {
            name: "Peach Satin Pillow Cover",
            price: "৳ 350",
            image: "image/Satin pillow cover/peach.jpg",
            description: "চুল পড়া রোধ এবং ত্বকের যত্নে প্রিমিয়াম স্যাটিন পিলোকভার। এটি সাধারণ সুতির বালিশের কভারের মতো আপনার চুল ও ত্বকের প্রাকৃতিক আর্দ্রতা শুষে নেয় না। রাতে ঘুমানোর সময় ঘর্ষণ কমিয়ে চুলকে রাখে জটমুক্ত, সিল্কি এবং ত্বককে রাখে সুরক্ষিত।"
        },

        "lightpink-pillowcover": {
            name: "Light Pink Satin Pillow Cover",
            price: "৳ 350",
            image: "image/Satin pillow cover/light pink.jpg",
            description: "চুল পড়া রোধ এবং ত্বকের যত্নে প্রিমিয়াম স্যাটিন পিলোকভার। এটি সাধারণ সুতির বালিশের কভারের মতো আপনার চুল ও ত্বকের প্রাকৃতিক আর্দ্রতা শুষে নেয় না। রাতে ঘুমানোর সময় ঘর্ষণ কমিয়ে চুলকে রাখে জটমুক্ত, সিল্কি এবং ত্বককে রাখে সুরক্ষিত।"
        }, 
    // Category: Satin Hair Bonnet
        
        "pink-bonnet": {
            name: "Pink Satin Hair Bonnet",
            price: "৳ 400",
            image: "image/Satin hair bonnet/pink.jpg",
            description: "রাতের বেলায় চুলের পারফেক্ট যত্নের জন্য প্রিমিয়াম স্যাটিন হেয়ার বনেট। ঘুমানোর সময় বালিশের সাথে ঘর্ষণ রোধ করে চুল পড়া ও ফ্রিজ (frizz) একদম কমিয়ে দেয়। চুলের প্রাকৃতিক আর্দ্রতা ধরে রাখতে এবং হেয়ারস্টাইল নষ্ট হওয়া থেকে বাঁচাতে এটি দারুণ কার্যকরী।"
        }
    
        
        

    };


    
    
    

    
