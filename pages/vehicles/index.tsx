import Link from "next/link";
import React from "react";
import Nav from "../../components/Nav";

type Props = {};

const index = (props: Props) => {
	return <div>all vehicles
    <Link href="/vehicles/2">link to 2</Link>
    </div>;
};

export default index;
