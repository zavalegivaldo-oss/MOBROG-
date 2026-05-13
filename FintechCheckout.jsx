

export default function FintechCheckout() { return ( <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6"> <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">

<div className="bg-red-600 p-6 text-white">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Vynex Pay</h1>
          <p className="text-sm opacity-80 mt-1">
            Checkout Seguro M-Pesa
          </p>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-2xl font-bold">
          V
        </div>
      </div>
    </div>

    <div className="p-6">

      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-slate-500">
              Valor Total
            </p>

            <h2 className="text-4xl font-bold text-slate-900 mt-2">
              100 MT
            </h2>
          </div>

          <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
            Seguro
          </div>
        </div>
      </div>

      <div className="space-y-4">

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Número M-Pesa
          </label>

          <input
            type="tel"
            placeholder="84XXXXXXX"
            className="w-full h-14 px-4 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Nome Completo
          </label>

          <input
            type="text"
            placeholder="Seu nome"
            className="w-full h-14 px-4 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Referência
          </label>

          <input
            type="text"
            placeholder="Pedido #1001"
            className="w-full h-14 px-4 rounded-2xl border border-slate-300 outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      <button
        className="w-full mt-6 h-14 rounded-2xl bg-red-600 text-white text-lg font-bold hover:opacity-90 transition"
        onClick={() => {
          alert('Solicitação M-Pesa enviada');
        }}
      >
        ⚡ Pagar Agora
      </button>

      <div className="mt-6 bg-slate-50 rounded-2xl p-4 border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
            🔒
          </div>

          <div>
            <h3 className="font-semibold text-slate-800">
              Pagamento Protegido
            </h3>

            <p className="text-sm text-slate-500 mt-1">
              Criptografia e segurança de nível bancário.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">

        <div className="bg-slate-100 rounded-2xl p-3 text-center">
          <div className="text-2xl">⚡</div>
          <p className="text-xs mt-2 text-slate-600">
            Instantâneo
          </p>
        </div>

        <div className="bg-slate-100 rounded-2xl p-3 text-center">
          <div className="text-2xl">📲</div>
          <p className="text-xs mt-2 text-slate-600">
            M-Pesa
          </p>
        </div>

        <div className="bg-slate-100 rounded-2xl p-3 text-center">
          <div className="text-2xl">🛡️</div>
          <p className="text-xs mt-2 text-slate-600">
            Seguro
          </p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-slate-500">
        Powered by Vynex Pay
      </di
