import styled from "styled-components";

const SkeletonContainer = styled.div`
    display: flex;
    width: 800px;
    height: 150px;
    margin: 20px 0px;
`;

const DummyInfoContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 12px;
`;

const DummyMealType = styled.div`
    width: 16px;
    height: 16px;
    background: #322f1020;
    border-radius: 4px;
`;

const DummyTitle = styled.div`
    width: 200px;
    height: 16px;
    background: #322f1020;
    border-radius: 4px;
`;

const DummyPrice = styled.div`
    width: 100px;
    height: 16px;
    background: #322f1020;
    border-radius: 4px;
`;

const DummyGenDiv = styled.div`
    display: flex;
    width: 100%;
    gap: 8px;
`;

const DummyCategory = styled.div`
    width: 80px;
    height: 30px;
    background: #322f1020;
    border-radius: 4px;
`;

const DummyAvailability = styled.div`
    width: 80px;
    height: 30px;
    background: #322f1020;
    border-radius: 4px;
`;

const DummyDescription = styled.div`
    width: 600px;
    height: 30px;
    background: #322f1020;
    border-radius: 4px;
`;

const DummyImg = styled.div`
    display: flex;
    width: 160px;
    height: 140px;
    background: linear-gradient(rgb(255, 255, 255, 0.1) -8%,
                    rgb(223, 223, 224, 0.5) 40%,
                    rgb(0, 0, 0, 0.5) 100%);
    border-radius: 16px;
`;


export const ProductCardSkeleton = () => {
    return(
        <SkeletonContainer>
            <DummyInfoContainer>
                <DummyMealType/>
                <DummyTitle/>
                <DummyPrice/>
                <DummyGenDiv>
                    <DummyCategory/>
                    <DummyAvailability/>
                </DummyGenDiv>
                <DummyDescription/>
            </DummyInfoContainer>
            <DummyImg/>
        </SkeletonContainer>
    );
};