// বাংলাদেশের লোকেশন ডাটাবেস (Division > District > Upazila)
const bdLocations = {
    "Dhaka (ঢাকা)": {
        "Dhaka": ["Adabor", "Badda", "Dhanmondi", "Gulshan", "Mirpur", "Mohammadpur", "Uttara"],
        "Gazipur": ["Gazipur Sadar", "Kaliakair", "Kapasia", "Sreepur"],
        "Narayanganj": ["Araihazar", "Bandar", "Narayanganj Sadar", "Rupganj"],
        "Tangail": ["Tangail Sadar", "Kalihati", "Madhupur", "Mirzapur"]
    },
    "Chattogram (চট্টগ্রাম)": {
        "Chattogram": ["Anwara", "Boalkhali", "Hathazari", "Patiya", "Chattogram Sadar"],
        "Cox's Bazar": ["Chakaria", "Cox's Bazar Sadar", "Teknaf", "Ukhia"],
        "Cumilla": ["Cumilla Sadar", "Chandina", "Daudkandi", "Laksam"]
    },
    "Rajshahi (রাজশাহী)": {
        "Rajshahi": ["Boalia", "Godagari", "Paba", "Puthia"],
        "Bogura": ["Bogura Sadar", "Nandigram", "Sariakandi", "Sherpur"],
        "Pabna": ["Pabna Sadar", "Ishwardi", "Santhia"]
    },
    "Khulna (খুলনা)": {
        "Khulna": ["Batiaghata", "Dacope", "Khulna Sadar", "Phultala"],
        "Jashore": ["Jashore Sadar", "Abhaynagar", "Jhikargachha", "Keshabpur"]
    },
    "Sylhet (সিলেট)": {
        "Sylhet": ["Sylhet Sadar", "Bishwanath", "Golapganj", "Gowainghat"],
        "Moulvibazar": ["Moulvibazar Sadar", "Kulaura", "Sreemangal"]
    },
    "Barishal (বরিশাল)": {
        "Barishal": ["Barishal Sadar", "Agailjhara", "Babuganj", "Bakerganj"],
        "Patuakhali": ["Patuakhali Sadar", "Bauphal", "Dashmina", "Galachipa"]
    },
    "Rangpur (রংপুর)": {
        "Rangpur": ["Rangpur Sadar", "Badarganj", "Mithapukur", "Pirganj"],
        "Dinajpur": ["Dinajpur Sadar", "Birampur", "Birganj", "Phulbari"]
    },
    "Mymensingh (ময়মনসিংহ)": {
        "Mymensingh": ["Mymensingh Sadar", "Bhaluka", "Gafargaon", "Trishal"],
        "Jamalpur": ["Jamalpur Sadar", "Melandaha", "Sarishabari"]
    }
};