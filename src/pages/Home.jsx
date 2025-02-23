import { motion } from 'framer-motion'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
        Hi, I'm <span className="text-blue-600">Abdalla Abdelmagid</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
        Web Developer | Designer | Creative Thinker
      </p>
      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
        >
          Contact Me
        </a>
      </div>
    </motion.div>
  )
}

export default Home 