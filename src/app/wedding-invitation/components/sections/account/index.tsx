'use client'

import { Copy } from 'lucide-react'
import { useState } from 'react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from 'src/components/ui/accordion'

interface AccountInfo {
  name: string
  relation: string
  bank: string
  accountNumber: string
}

const groomAccounts: AccountInfo[] = [
  {
    name: '김영수',
    relation: '신랑',
    bank: '토스뱅크',
    accountNumber: '123-456-789012',
  },
  {
    name: '김종건',
    relation: '신랑 아버지',
    bank: '토스뱅크',
    accountNumber: '123-456-789012',
  },
  {
    name: '신혜련',
    relation: '신랑 어머니',
    bank: '토스뱅크',
    accountNumber: '123-456-789012',
  },
]

const brideAccounts: AccountInfo[] = [
  {
    name: '박현아',
    relation: '신부',
    bank: '토스뱅크',
    accountNumber: '123-456-789012',
  },
  {
    name: '박병호',
    relation: '신부 아버지',
    bank: '토스뱅크',
    accountNumber: '123-456-789012',
  },
  {
    name: '김영자',
    relation: '신부 어머니',
    bank: '토스뱅크',
    accountNumber: '123-456-789012',
  },
]

const AccountCard = ({ account }: { account: AccountInfo }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(account.accountNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-white rounded-sm p-5  shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <span className="font-medium text-[15px] text-gray-900">
          {account.name}
        </span>
        <span className="text-[13px] text-gray-500">{account.relation}</span>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="text-[12px] text-gray-500 mb-2">{account.bank}</div>
        <div className="flex items-center justify-between">
          <span className="text-[14px] font-medium text-gray-900">
            {account.accountNumber}
          </span>

          <button
            type="button"
            onClick={copyToClipboard}
            className="flex items-center gap-1 text-[12px] text-[#999] hover:text-gray-900 transition-colors"
          >
            <Copy className="w-4 h-4" />
            {copied && <span className="text-gray-900">복사됨</span>}
          </button>
        </div>
      </div>
    </div>
  )
}

const AccountSection = () => {
  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="max-w-md mx-auto px-6">
        {/* 제목 */}

        <div className="w-16 h-px bg-gray-800 mx-auto mb-12" />
        <div className="flex flex-col gap-4 mb-10 text-center">
          <h2 className="font-medium text-gray-800">마음 전하실 곳</h2>

          {/* 설명 */}
          <div className="text-center text-sm text-gray-500 space-y-1">
            <p>참석이 어려우신 분들을 위해 기재했습니다</p>
            <p>너그러운 마음으로 양해 부탁드립니다</p>
          </div>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible>
          <AccordionItem
            value="groom"
            className="bg-white rounded-lg mb-3 overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="text-[#444] font-medium text-sm">
              신랑측에게
            </AccordionTrigger>

            <AccordionContent className="py-4 px-6 bg-wedding-green-bg">
              <div className="flex flex-col gap-3">
                {groomAccounts.map((account, index) => (
                  <AccountCard key={index} account={account} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="bride"
            className="bg-white rounded-lg overflow-hidden shadow-sm"
          >
            <AccordionTrigger className="text-[#444] font-medium text-sm">
              신부측에게
            </AccordionTrigger>
            <AccordionContent className="p-4 bg-wedding-green-bg">
              <div className="flex flex-col gap-3">
                {brideAccounts.map((account, index) => (
                  <AccountCard key={index} account={account} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

export default AccountSection
