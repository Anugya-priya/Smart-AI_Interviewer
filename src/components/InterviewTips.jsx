import { useState } from 'react'

const TIPS = [
  'Read the question carefully before answering.',
  'Use the STAR method for behavioral questions.',
  'Keep your answers clear and concise.',
  'Give examples from your projects whenever possible.',
  'If you do not know an answer, explain how you would learn it.',
]

export default function InterviewTips() {
  const [currentTip, setCurrentTip] = useState(0)

  const nextTip = () => {
    setCurrentTip((currentTip + 1) % TIPS.length)
  }

  return (
    <div className="mb-8 rounded-lg border border-[#00F0FF]/20 bg-[#0A101D] p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="mb-2 font-heading text-sm font-semibold tracking-wider text-white uppercase">
            💡 Interview Tip
          </h2>

          <p className="text-sm leading-6 text-secondary">
            {TIPS[currentTip]}
          </p>
        </div>

        <button
          onClick={nextTip}
          className="rounded-md border border-[#00F0FF]/30 px-4 py-2 text-xs font-medium text-[#00F0FF] transition hover:bg-[#00F0FF]/10"
        >
          Next Tip →
        </button>
      </div>

      <div className="mt-4 text-xs text-secondary">
        Tip {currentTip + 1} of {TIPS.length}
      </div>
    </div>
  )
}

