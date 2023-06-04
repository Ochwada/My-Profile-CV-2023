import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { socialMedia } from '../constants'; // assuming you have this
import { fadeIn, textVariant } from '../utils/motion';

const SocialMediaCard = ({ index, icon, link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt options={{ max: 45, scale: 1, speed: 450 }}
                className="bg-tertiary p-3 rounded-full w-full green-pink-gradient flex justify-center items-center ">
                    <div
                        onClick={() => window.open(link, "_blank")}
                        className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                    >
                        <img
                            src={icon}
                            alt="social-media-icon"
                            className="w-1/2 h-1/2 object-contain"
                        />
                    </div>
               
            </Tilt>
        </motion.div>
    )
}

const SocialMedia = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <h4 className={`${styles.sectionSubText} `}>Social Media.</h4>
            </motion.div>

            <div className='mt-20 flex flex-wrap gap-7  justify-center items-center '>
                {socialMedia.map((media, index) => (
                    <SocialMediaCard key={`media-${index}`} index={index} {...media} />
                ))}
            </div>
        </>
    )
}

export default SocialMedia