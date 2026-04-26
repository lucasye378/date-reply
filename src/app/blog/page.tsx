import Link from "next/link";

export const metadata = {
  title: "约会短信不知道怎么回？试试这个方法 - date-reply",
  description: "约会/聊天不知道怎么回？分析3个常见场景，给出具体回复建议。配合AI工具，免费试用3次。",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-pink-500">
            💬 date-reply
          </Link>
          <Link 
            href="/"
            className="text-sm text-pink-500 hover:text-pink-700"
          >
            试用AI →
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          约会短信不知道怎么回？试试这个方法
        </h1>
        <p className="text-gray-600 mb-8">
          刚认识的男生发来"在干嘛"，你纠结了10分钟不知道怎么回？约会对象说"改天再约"，你不知道该接什么？
        </p>

        {/* Scene 1 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            场景1：刚认识，不知道怎么开场
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
            <p className="text-gray-600 mb-3">他： "在干嘛呢？""</p>
            <p className="text-pink-600 font-medium">你： 不知道怎么接？</p>
          </div>

          <h3 className="font-semibold text-gray-800 mb-2">常见回复分析：</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-500">❌</span>
              <span>"没干嘛，你呢" → 太敷衍，话题断了</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">❌</span>
              <span>"在想你啊" → 太直接，可能吓跑对方</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500">✅</span>
              <span>"刚到家，准备做晚饭。你呢？" → 自然，轻松，有延续</span>
            </li>
          </ul>
        </section>

        {/* Scene 2 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            场景2：约会结束后，不知道怎么延续
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
            <p className="text-gray-600 mb-3">他： "今天很开心，改天再约""</p>
            <p className="text-pink-600 font-medium">你： 怎么回？</p>
          </div>

          <h3 className="font-semibold text-gray-800 mb-2">常见错误：</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-red-500">❌</span>
              <span>"好" → 太短，对方不知道怎么继续</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">❌</span>
              <span>"好的，我也觉得" → 安全但没味道</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500">❌</span>
              <span>不回 → 直接把天聊死</span>
            </li>
          </ul>

          <div className="mt-4 bg-pink-50 rounded-xl p-4 border border-pink-100">
            <p className="text-pink-800 font-medium mb-2">💡 更好的选项：</p>
            <p className="text-gray-700">
              "我也是！上次那家咖啡店不错，下次带你去" — 主动，延续了约会话题，还约了下一次。
            </p>
          </div>
        </section>

        {/* Scene 3 */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            场景3：对方发来模糊的消息
          </h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-4">
            <p className="text-gray-600 mb-3">他： "这几天比较忙""</p>
            <p className="text-pink-600 font-medium">你： 怎么理解？怎么回？</p>
          </div>

          <p className="text-gray-600 mb-4">
            这句话可能是借口，也可能真的忙。回应的关键是：既不追问，也不冷淡。
          </p>

          <div className="space-y-3">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-gray-700">"理解，你先忙" → 简短得体，但有点冷</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <p className="text-gray-700">"忙完记得休息～" → 温暖，有关心</p>
            </div>
            <div className="bg-pink-50 rounded-xl p-4 border border-pink-200">
              <p className="text-gray-700">
                <span className="text-pink-600 font-medium">"忙完找我，我请你喝咖啡"</span> → 留钩子，暗示你愿意继续
              </p>
            </div>
          </div>
        </section>

        {/* Why this happens */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            为什么会有"不知道怎么回"这种感觉？
          </h2>
          <p className="text-gray-700 mb-4">
            其实这不是你一个人的问题。
          </p>
          <p className="text-gray-700 mb-4">
            约会初期，双方都在试探，信息量少，每条消息都可能被过度解读。"他为什么只回一个字？""她发这个表情是什么意思？"
          </p>
          <p className="text-gray-700">
            这种不确定性让大脑进入"分析模式"，而不是"自然聊天模式"。结果就是：你越想越不知道该怎么回，越不回越尴尬。
          </p>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-pink-400 to-rose-500 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">不知道怎么说？给你3个选项</h2>
          <p className="text-pink-100 mb-4">
            "每次发消息都要想很久，怕说错话"——这是我们用户的真实感受
          </p>
          <p className="text-pink-100 mb-6">
            date-reply 根据对方的消息和你们的关系阶段，给出3个不同风格的回复建议
          </p>
          <Link
            href="/"
            className="inline-block bg-white text-pink-600 font-bold px-8 py-4 rounded-xl hover:bg-pink-50 transition-colors"
          >
            免费试用3次 →
          </Link>
          <p className="text-xs text-pink-200 mt-4">无需注册 · 阅后即焚 · 随时取消</p>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>© 2026 date-reply · 约会短信助手</p>
          <p className="mt-2">
            <Link href="/" className="text-pink-500 hover:underline">返回首页</Link>
          </p>
        </footer>
      </article>
    </main>
  );
}
