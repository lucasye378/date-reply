export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          为什么选择我们？
        </h1>
        <p className="text-center text-gray-600 mb-12">
          专为中文用户设计的约会短信助手
        </p>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 text-white text-center">
            <div className="text-4xl mb-2">💬</div>
            <h2 className="text-xl font-bold">date-reply</h2>
            <p className="text-pink-100 text-sm mt-1">约会短信助手</p>
          </div>

          {/* Price */}
          <div className="p-6 text-center border-b">
            <div className="flex items-center justify-center gap-2">
              <span className="text-4xl font-bold text-gray-900">$9.99</span>
              <span className="text-gray-500">/月</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">年付 $59.99（省 $60）</p>
          </div>

          {/* Features */}
          <div className="p-6 space-y-4">
            <h3 className="font-semibold text-gray-900 mb-4">功能对比</h3>
            
            <div className="space-y-3">
              <FeatureRow 
                label="AI 回复建议" 
                ours="✅ 3个选项" 
                competitor="✅" 
              />
              <FeatureRow 
                label="中文支持" 
                ours="✅ 原生中文" 
                competitor="❌ 英文为主" 
              />
              <FeatureRow 
                label="隐私保护" 
                ours="✅ 阅后即焚" 
                competitor="⚠️ 有存档" 
              />
              <FeatureRow 
                label="价格" 
                ours="✅ $9.99/月" 
                competitor="❌ $17/月" 
              />
              <FeatureRow 
                label="使用场景" 
                ours="✅ 约会、暧昧、刚认识" 
                competitor="✅" 
              />
            </div>
          </div>

          {/* CTA */}
          <div className="p-6 bg-gray-50">
            <a 
              href="/"
              className="block w-full py-4 bg-pink-500 text-white text-center rounded-2xl font-medium hover:bg-pink-600 transition-colors"
            >
              立即试用（免费3次）
            </a>
            <p className="text-center text-xs text-gray-500 mt-3">
              无需信用卡 · 随时取消 · 阅后即焚
            </p>
          </div>
        </div>

        {/* Testimonials placeholder */}
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-gray-900 text-center mb-6">
            用户怎么说
          </h3>
          <div className="space-y-4">
            <blockquote className="bg-white rounded-2xl p-4 shadow">
              <p className="text-gray-700 text-sm">
                "每次收到消息脑子就空白，用了这个之后终于知道怎么回了"
              </p>
              <p className="text-xs text-gray-500 mt-2">— 留学生，25岁</p>
            </blockquote>
            <blockquote className="bg-white rounded-2xl p-4 shadow">
              <p className="text-gray-700 text-sm">
                "比ChatGPT好用，因为是专门给约会场景设计的"
              </p>
              <p className="text-xs text-gray-500 mt-2">— 海外华人，28岁</p>
            </blockquote>
          </div>
        </div>
      </div>
    </main>
  );
}

function FeatureRow({ label, ours, competitor }: { label: string; ours: string; competitor: string }) {
  return (
    <div className="flex items-center text-sm">
      <span className="w-28 text-gray-600">{label}</span>
      <span className="flex-1 text-pink-600 font-medium">{ours}</span>
      <span className="w-24 text-right text-gray-400">{competitor}</span>
    </div>
  );
}
