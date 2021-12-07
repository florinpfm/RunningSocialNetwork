import React from 'react';
import PropTypes from 'prop-types';
import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlinePhone } from 'react-icons/ai';
import { BsGenderAmbiguous } from 'react-icons/bs';
import { GrStatusInfo } from 'react-icons/gr';
import { SiNamecheap } from 'react-icons/si';

const User =({
  profile: { user, nickname, city, phoneNumber, gender, status },
}) => {
  return (
		user && (

			<div className="my-2 mx-2">
				<div className="card" style={{width: 250}}>
					<img src={user.avatar} className="card-img-top round-img" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{user.name}</h5>
						<p className="card-text"><AiOutlinePhone /> {phoneNumber}</p>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-group-item">{city && (<span><IoLocationSharp /> {city}</span>)}</li>
						<li className="list-group-item">{gender && (<span><BsGenderAmbiguous /> {gender}</span>)}</li>
						<li className="list-group-item">{status && (<span><GrStatusInfo /> {status}</span>)}</li>
						<li className="list-group-item mb-3">{nickname && (<span><SiNamecheap /> {nickname}</span>)}</li>
					</ul>
					
				</div>
			</div>
		)
	);
}

User.propTypes = {
	profile: PropTypes.object.isRequired,
};

export default User;
