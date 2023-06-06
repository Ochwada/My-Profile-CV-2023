import { Tilt } from 'react-tilt';
import { motion, spring } from 'framer-motion';


import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { blogs } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';




const BlogCard = ({ index, name, description, date, blog_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt options={{ max: 35, scale: 1, speed: 450 }}
                className="bg-tertiary p-4 rounded-2xl sm:w-[360PX] w-full p-[1px] violet-gradient">
                <div className="mt-2">
                    <h3 className='text-black font-bold text-[18px]'>{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">
                        {description.length > 180 ? description.substring(0, 180) + "..." : description}
                    </p>
                    <p className="mt-2 text-secondary text-[10px] italic">{date}</p>
                    <button
                        onClick={() => window.open(blog_link, "_blank")}
                        className='mt-2 text-secondary text-[12px] cursor-pointer text-bold'
                    >
                        READ MORE ...
                    </button>
                </div>
            </Tilt>
        </motion.div>
    )
}

const Blog = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>What I have written</p>
                <h2 className={`${styles.sectionHeadText}`}>Blogging.</h2>
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-5 justify-between'>
                {blogs.map((blog, index) => (
                    <BlogCard key={`blog-${index}`} index={index} {...blog} />
                ))}
            </div>
        </>
    )
}


export default SectionWrapper(Blog, "blogs")