import styled from "styled-components";


export const SliderWrapper = styled.div`
    overflow: hidden;
    margin-top: -4px;
    .slick-slide.slick-active.slick-current {
        font-weight: 700;
        border-bottom: 3px solid red;
    }

    .slick-prev {
        &:before {
            content: none;
        }
        justify-content: end;
        left: -60px;
    }
    .slick-next {
        &:before {
            content: none;
        }
        justify-content: start;
        right: -60px;
    }
    .slick-prev,.slick-next {
        border: none;
        display: inline-flex;
        align-items: center;
        flex-direction: row;
        background-color: #fff;
        color: #000;
        
    }

    &:hover {
        & .slick-prev {
            left: -20px;
        }

        & .slick-next {
            right: -20px;
        }
    }
`



export const SliderWrapperProduct = styled.div`
    overflow: hidden;
    .slick-list {
        padding: 10px;
    }

    .slick-prev {
        &:before {
            content: none;
        }
        justify-content: end;
        left: -60px;
    }
    .slick-next {
        &:before {
            content: none;
        }
        justify-content: start;
        right: -60px;
    }
    .slick-prev,.slick-next {
        border: none;
        display: inline-flex;
        align-items: center;
        flex-direction: row;
        background-color: #fff;
        color: #000;
        
    }

    &:hover {
        & .slick-prev {
            left: -20px;
        }

        & .slick-next {
            right: -20px;
        }
    }

    .slick-slide>div {
        div:first-child {
            margin-bottom:10px;
        }
    }
`