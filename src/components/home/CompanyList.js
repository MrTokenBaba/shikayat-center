import Image from "next/image";


export default function CompanyList() {
    const companies = [
        {
            id: 1,
            name: "Yiğit Akü",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Yi%C4%9Fit_Ak%C3%BC_logo.png/320px-Yi%C4%9Fit_Ak%C3%BC_logo.png",
            score: 63,
            pro: true,
        },
        {
            id: 2,
            name: "İnci Akü",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Inci_Aku_logo.png",
            score: 38,
            pro: true,
        },
        {
            id: 3,
            name: "Mutlu Akü",
            logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Mutlu_Aku_logo.png",
            score: 18,
            pro: false,
        },
        {
            id: 4,
            name: "Varta Akü",
            logo: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Varta_Logo.png",
            score: 9,
            pro: false,
        },
    ];
    return (
        <div className="bg-[#1f1f2e] text-white min-h-screen flex flex-col items-center py-10">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-8">Çözüm Başarısı</h1>

            {/* Filter */}
            <div className="flex gap-4 mb-10">
                <select className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600">
                    <option>Akü</option>
                    <option>Elektronik</option>
                    <option>Mobilya</option>
                </select>
                <button className="px-4 py-2 rounded-lg bg-green-600 text-white">
                    Son 1 Yıl
                </button>
            </div>

            {/* Info */}
            <p className="text-gray-400 text-center max-w-2xl mb-8">
                Bu sıralama, firmaların büyüklükleri, şikayet sayıları ve şikayet
                oranlarından bağımsız olarak sadece şikayetçi memnuniyeti puanlarına göre
                yapılmaktadır.
            </p>

            {/* Ranking List */}
            <div className="w-full max-w-2xl space-y-4">
                {companies.map((company, index) => (
                    <div
                        key={company.id}
                        className="flex items-center justify-between bg-gray-800 rounded-xl p-4"
                    >
                        <div className="flex items-center gap-4">
                            {/* Position */}
                            <div
                                className="bg-blue-200 text-black w-10 h-10 flex items-center justify-center rounded-lg font-bold">
                                {index + 1}
                            </div>
                            {/* Logo */}
                            <Image
                                src={company.logo}
                                alt={company.name}
                                width={64}
                                height={40}
                                className="w-16 h-10 object-contain bg-white rounded"
                            />
                            {/* Name */}
                            <span className="font-semibold text-lg">{company.name}</span>
                            {/* PRO Tag */}
                            {company.pro && (
                                <span className="bg-purple-600 text-xs px-2 py-1 rounded-md">
                  PRO
                </span>
                            )}
                        </div>
                        {/* Score */}
                        <div className="flex items-center gap-2">
                                  <span className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-lg">
                                    {company.score}/100
                                  </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}