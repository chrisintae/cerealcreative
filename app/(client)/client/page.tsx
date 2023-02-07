import { Center, Wrapper } from '@comps/Layout'
import { ClientLogin } from "@comps/Forms";

export default function ClientLoginPage() {
  return (
    <>
      <Wrapper>
        <Center>
          <ClientLogin />
        </Center>
      </Wrapper>
    </>
  );
}
