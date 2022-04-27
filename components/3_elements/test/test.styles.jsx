import styled from 'styled-components'
import defaultTheme from '../../../styles/theme'
// import { ContentStyles } from '../../styles/global-components.styles';

export const TestStyles = styled('div')`
    width: 100%;
    display: flex;
    justify-content: center;

    .bs-test__element {
        margin: 0 10%;
        border-radius: 32px;
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;

        &.bs-test-hover {
            background-color: #CD67FB;
            cursor: grab;
        }

        &.bs-test-view {
            background-color: #CD67FB;
        }
    }
`