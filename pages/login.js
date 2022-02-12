import React from 'react'
import { getProviders, signIn } from 'next-auth/react'
function login({ providers }) {
  return (
    <div className="flex min-h-screen w-full flex-col  items-center justify-center bg-black">
      <img
        className="mb-10 w-52"
        src="https://links.papareact.com/9xl"
        alt=""
      />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <buttton
            className="cursor-pointer rounded-full bg-[#18D860] p-5  text-white"
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </buttton>
        </div>
      ))}
    </div>
  )
}

export default login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
