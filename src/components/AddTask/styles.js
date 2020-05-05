import styled from 'styled-components';

export const Container = styled.div`
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