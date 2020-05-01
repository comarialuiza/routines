import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    height: 300px;
    margin: 30px;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

    h2 {
        font-weight: 300;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
    }
`;

export const Task = styled.li`
    padding: 10px 0;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Checkbox = styled.span`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 1px solid #333;
    display: block;
    margin-right: 8px;
`;

export const Content = styled.p`
    position: relative;

    &:after {
        content: '';
        display: block;
        height: 1px;
        width: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background: #333;
        transition: all .4s;
    }

    &:hover {
        &:after {
            width: 100%;
        }
    }
`;