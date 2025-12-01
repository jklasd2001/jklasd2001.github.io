'use client'

import { overlay } from 'overlay-kit'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from 'src/components/ui/dialog'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'src/components/ui/tabs'

interface ContactPerson {
  name: string
  relation: string
  phone: string
}

const groomContacts: ContactPerson[] = [
  { name: '김영수', relation: '신랑', phone: '010-4176-4839' },
  { name: '김종건', relation: '신랑 아버지', phone: '010-9197-4849' },
  { name: '신혜련', relation: '신랑 어머니', phone: '010-4156-8945' },
]

const brideContacts: ContactPerson[] = [
  { name: '박현아', relation: '신부', phone: '010-7223-5249' },
  { name: '박병호', relation: '신부 아버지', phone: '010-5346-5694' },
  { name: '김영자', relation: '신부 어머니', phone: '010-6539-2040' },
]

const ContactCard = ({ contact }: { contact: ContactPerson }) => {
  return (
    <div className="bg-white rounded-lg p-5 shadow-sm">
      <div className="flex justify-between items-start mb-4 font-suit">
        <span className="text-md font-medium text-[#444]">{contact.name}</span>
        <span className="text-sm text-[#999]">{contact.relation}</span>
      </div>

      <div className="flex gap-2">
        <a
          href={`sms:${contact.phone}`}
          className="flex-1 bg-[#A0B589] text-white py-3 px-4 rounded-lg text-center text-sm font-medium"
        >
          문자 보내기
        </a>
        <a
          href={`tel:${contact.phone}`}
          className="flex-1 bg-[#5A5A5A] text-white py-3 px-4 rounded-lg text-center text-sm font-medium"
        >
          전화하기
        </a>
      </div>
    </div>
  )
}

const CoupleInfoSection = () => {
  const handleOpenContactDialog = () => {
    overlay.open(({ close, isOpen }) => (
      <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className="max-w-md rounded-lg">
          <div className="flex flex-col items-center mb-6">
            <DialogTitle className="text-2xl mb-2 font-suit tracking-tight leading-snug opacity-90 text-[#444]">
              축하 연락하기
            </DialogTitle>

            <DialogDescription className="text-sm text-wedding-green">
              직접 축하의 마음을 전해주세요
            </DialogDescription>
          </div>

          <Tabs defaultValue="groom" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="groom" className="flex-1">
                신랑에게
              </TabsTrigger>
              <TabsTrigger value="bride" className="flex-1">
                신부에게
              </TabsTrigger>
            </TabsList>

            <TabsContent value="groom" className="mt-4">
              <div className="flex flex-col gap-3">
                {groomContacts.map((contact, index) => (
                  <ContactCard key={index} contact={contact} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="bride" className="mt-4">
              <div className="flex flex-col gap-3">
                {brideContacts.map((contact, index) => (
                  <ContactCard key={index} contact={contact} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    ))
  }

  return (
    <section className="px-6 py-20 bg-wedding-green-bg">
      {/* 신랑 섹션 */}
      <div className="text-center mb-8">
        {/* 신랑 라벨 */}
        <div className="inline-block bg-wedding-green text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
          신랑
        </div>

        {/* 신랑 이름 */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">영수</h2>
          <p className="text-sm text-gray-500">YOUNG SU</p>
        </div>

        {/* 신랑 부모님 */}
        <div className="mb-2">
          <p className="text-gray-800">김종건 | 신혜련</p>
        </div>

        {/* 관계 */}
        <p className="text-sm text-gray-500">아들</p>
      </div>

      {/* 구분선 */}
      <div className="w-full h-px bg-gray-300 mb-8" />

      {/* 신부 섹션 */}
      <div className="text-center mb-8">
        {/* 신부 라벨 */}
        <div className="inline-block bg-wedding-green text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
          신부
        </div>

        {/* 신부 이름 */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-1">현아</h2>
          <p className="text-sm text-gray-500">HYUNA</p>
        </div>

        {/* 신부 부모님 */}
        <div className="mb-2">
          <p className="text-gray-800">박병호 | 김영자</p>
        </div>

        {/* 관계 */}
        <p className="text-sm text-gray-500">딸</p>
      </div>

      {/* 연락하기 버튼 */}
      <button
        type="button"
        onClick={handleOpenContactDialog}
        className="w-full bg-wedding-green text-white py-4 px-6 rounded-lg flex items-center justify-between"
      >
        <span className="font-medium">축하 연락하기</span>
        <svg
          role="img"
          aria-label="Arrow right"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <path
            d="M9 18L15 12L9 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  )
}

export default CoupleInfoSection
