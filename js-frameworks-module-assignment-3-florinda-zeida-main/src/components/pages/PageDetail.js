import { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Moment from 'react-moment';
import Heading from "../layout/Heading"
import { BASE_URL } from "../../constants/Api";
import { PAGE_PATH } from "../../constants/Api";



function PageDetail() {
	const [pages, setPages] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	

	let history = useHistory();

	const { id } = useParams();

	if (!id) {
		history.push("/");
	}

	const url = BASE_URL + PAGE_PATH ;

	const urlDetail = url + "/" + id;

	useEffect(
		function () {
			async function pageName() {
				try {
					const response = await fetch(urlDetail);

					if (response.ok) {
						const json = await response.json();
						console.log(json);
						setPages(json);
					} else {
						setError("An error occured");
					}
				} catch (error) {
					setError(error.toString());
				} finally {
					setLoading(false);
				}
			}
			pageName();
		},
		[urlDetail]
	);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}

	return (

		<div className="box">
			<Heading content={pages.title.rendered} />
			<Moment className="moment" format="DD MMMM YYYY">{pages.date}</Moment>
			<p dangerouslySetInnerHTML={{ __html: pages.excerpt.rendered }} />
		</div>	
	);
}

export default PageDetail;




