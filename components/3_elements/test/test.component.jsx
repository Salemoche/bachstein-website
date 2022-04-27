// Base
import React, { useRef, useEffect, useState } from 'react'
import Link from 'next/link';

// Data
import { defaultStore } from '../../../state/store';

// Style
import { TestStyles } from './test.styles';

// Components
import { motion } from 'framer-motion';

const TestComponent = () => {

    return (
        <TestStyles className="bs-test">
            <motion.div
                className='bs-test__element bs-test-hover'
                initial={{ backgroundColor: '#CD67FB', opacity: 0.2 }}
                whileHover={{ backgroundColor: '#67FB85', opacity: 1 }}
                transition={{
                    duration: 0.25
                }}
            >
                While hover
            </motion.div>
            <motion.div
                className='bs-test__element bs-test-hover'
                initial={{ backgroundColor: '#CD67FB', opacity: 0.2 }}
                whileInView={{ backgroundColor: '#67FB85', opacity: 1 }}
                transition={{
                    duration: 0.25
                }}
                onViewportEnter={() => {console.log('enter')}}
            >
                While in view
            </motion.div>
        </TestStyles>
    )
}

export default TestComponent
