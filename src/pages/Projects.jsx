import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'University Marketplace',
      description: 'Online marketplace for students only. Students login with their university email and have a safe and convenient place to buy and sell items.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      image: '/project1.jpg', // Add your project image
      link: 'https://github.com/Abdalla2024/COSC484_Project'
    },
    {
      title: 'nVolve',
      description: 'IOS application that allows Towson University students to search for events on campus, favorite them, get directions to them, and receive notifications so they don\'t miss them.',
      technologies: ['SwiftUI', 'Mapkit', 'Alamofire'],
      image: '/project2.jpg', // Add your project image
      link: 'https://github.com/Abdalla2024/nVolve'
    },
    {
      title: 'Film Focus',
      description: 'Film Focus is a web application that allows users to create an account, rate movies that they have watched, save movies for later, and see movies recommended to them by AI based on what they like.',
      technologies: ['HTML', 'Java', 'MySQL'],
      image: '/project1.jpg', // Add your project image
      link: 'https://github.com/Abdalla2024/Movie_Recommender'
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">My Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Projects 