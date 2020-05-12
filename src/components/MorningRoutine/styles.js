import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    width: 300px;
    height: 304px;
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
    justify-content: space-between;

    &#completed {
        opacity: 0.5;
    }
`;

export const Checkbox = styled.span`
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: 1px solid #333;
    display: block;
    margin-right: 8px;
    cursor: pointer;
`;

export const Content = styled.p`
    position: relative;
    width: calc(100% - 40px);
`;

export const AddTask = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    form {
        display: flex;
        align-items: center;
        justify-content: space-between;

        input {
            outline: 0;
            border: 0;
            padding: 8px 12px;
            background-color: #f7f7f7;
            border-radius: 3px;
            width: calc(100% - 75px);
        }

        button {
            padding: 8px 12px;
            color: #fff;
            outline: 0;
            border: 0;
            background-color: #333;
            border-radius: 3px;
        }
    }

    .toggleShow {
        outline: 0;
        border: 0;
        padding: 8px 12px;
        background-color: #e44232;
        color: #fff;
        border-radius: 3px;
    }

    #show {
        display: block;
    }

    #hide {
        display: none;
    }
`;

export const Delete = styled.button`
    border: 0;
    outline: 0;
    height: 12px;
    width: 12px;
    background: #e44232;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        color: #fff;
        height: 10px;
        width: 10px;
    }
`;