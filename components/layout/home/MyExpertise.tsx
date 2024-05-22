
import Card3D from '@/components/Card3D'
import Section from '@/components/common/Section'
import React from 'react'

const cardData = [
  {
    title: 'Front-End Fundamentals',
    listItems: [
      'I possess a strong foundation in the essential tools for building modern websites, including HTML, CSS, and JavaScript.',
      'I can write clean, semantic HTML that structures website content effectively, making it easy for search engines and users to understand.',
      'I\'m proficient in crafting visually appealing and responsive layouts using CSS. This ensures websites seamlessly adapt to all devices.',
      'My understanding of JavaScript allows me to implement basic interactivity and manipulate the DOM.',
    ],
  },
  {
    title: 'Bringing Websites to Life',
    listItems: [
      'I have a strong grasp of modern JavaScript frameworks like React/NextJs',
      'I can implement real-time updates, allowing users to see changes instantly without needing a full page reload, keeping them immersed in the experience.',
      'I can build UIs with reusable components in React, ensuring consistency and maintainability, making future development and updates efficient.',
      'I can create smooth animations and transitions that create a polished user experience and guide users through the interface intuitively.',
    ],
  },
  {
    title: 'Optimizing for Performance',
    listItems: [
      'I optimize websites for search engines (SEO) by implementing best practices like clean code structure, meta descriptions, and strategic keyword use. This helps users find your website more easily.',
      'I prioritize accessibility best practices to ensure everyone can access and interact with the website effectively.',
      'I can leverage techniques like image compression and code optimization to ensure a smooth user experience. This keeps users happy and engaged by delivering fast loading times.',
    ],
  },
];

const MyExpertise = () => {
  return (
    <Section className="">
      <h2 className="text-center text-3xl lg:text-5xl font-semibold mb-40"><span className="text-accentRed">My</span> Expertise</h2>
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-10 justify-center">
        {cardData.map((card, index) => (
          <Card3D key={index} title={card.title} cardData={card.listItems}/>
        ))}
      </div>
    </Section>
  )
}

export default MyExpertise
