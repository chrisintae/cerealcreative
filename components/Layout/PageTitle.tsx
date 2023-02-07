
import { DynamicCol, FixedCol, Header, Wrapper } from '@comps/Layout';


export default function ShowcasePage() {
    return (
        <>
            <Header />
            <Wrapper>
                <div className='w-full h-96 flex flec-col items-center justify-center'>
                    <h1 className='font-cursive text-2xl'>a cereal creative joint.</h1>
                </div>
            </Wrapper>
        </>
    );
}