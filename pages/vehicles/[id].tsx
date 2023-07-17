import { useRouter } from "next/router";
import React from "react";

type Props = {};

const Id = (props: Props) => {
	const router = useRouter();
  console.log('router', router.query)

	return( 
  <div>id</div>
  );
};

export default Id;
