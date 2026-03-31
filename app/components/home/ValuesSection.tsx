export default function ValuesSection() {
  const values = [
    {
      title: "Chất lượng cao",
      desc: "Cam kết sử dụng chất liệu tốt nhất",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
    },
    {
      title: "Thiết kế tối giản",
      desc: "Đơn giản nhưng không tầm thường",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
        </svg>
      ),
    },
    {
      title: "Dễ phối đồ",
      desc: "Kết hợp hoàn hảo trong mọi hoàn cảnh",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
    {
      title: "Giá hợp lý",
      desc: "Chất lượng xứng đáng với giá thành",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-white border-b border-slate-100">
      <div className="container">
        {/* TITLE */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <span className="font-heading text-xs tracking-widest uppercase text-slate-400 font-medium mb-4 block">
            Tại sao chọn chúng tôi
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-blue-950">
            Giá trị của HUSSIO
          </h2>
        </div>

        {/* GRID - Chuyển sang grid borderless với gap cân đối */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 text-center transition-all duration-300 flex flex-col items-center justify-center rounded-2xl hover:bg-slate-50 hover:shadow-lg hover:-translate-y-1"
            >
              {/* ICON */}
              <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-3xl bg-blue-50 text-blue-900 group-hover:bg-blue-900 group-hover:text-white group-hover:rotate-3 transition-all duration-500 shadow-sm">
                {value.icon}
              </div>

              {/* TITLE */}
              <h3 className="font-heading text-lg md:text-xl font-bold tracking-wide text-blue-950 mb-3">
                {value.title}
              </h3>

              {/* DESC */}
              <p className="text-sm text-slate-500 leading-relaxed max-w-[240px] mx-auto">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
