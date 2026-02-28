export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">About Vizage Solutions</h1>
      
      <div className="prose max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-lg text-gray-700 mb-4">
            At Vizage Solutions, we are dedicated to revolutionizing the way businesses communicate 
            through digital display technologies. Our mission is to provide state-of-the-art solutions 
            that enhance visibility and engagement, ensuring our clients stay ahead in a competitive market.
          </p>
          <p className="text-lg text-gray-700">
            With a focus on innovation and customer satisfaction, we strive to deliver products that 
            not only meet but exceed expectations, transforming ordinary spaces into extraordinary experiences.
          </p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Content Management System</h3>
              <p className="text-gray-700">
                Our robust CMS allows you to effortlessly manage and update your digital content, 
                ensuring your displays always showcase the latest information.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Professional Installation</h3>
              <p className="text-gray-700">
                Our expert installation team ensures your digital displays are set up for optimal 
                performance and maximum impact.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Art Curation Services</h3>
              <p className="text-gray-700">
                Enhance your space with our professional art curation services, selecting pieces 
                that align with your brand and captivate your audience.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
              <p className="text-gray-700">
                Experience unparalleled customer support with our dedicated team, ready to assist 
                you with any inquiries or technical issues.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
