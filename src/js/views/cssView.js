export const toggleHeader = () => {
		$('.panel--41').scroll(function () {
    if ($(this).scrollTop() < 5) {      
    	$(".header__container").removeClass("fade-up");      
    }else{    	
    	$(".header__container").addClass("fade-up");
    }              
  });
};

export const preloadImgs = (preimages) => {
	const myimages = [];
	for (let i=0;i<preimages.length;i++){
		myimages[i]=new Image();
		myimages[i].src=preimages[i];
	}
}

export const panelFix = (timing) =>{
	$('.btn__progress').on('click', function(){
		$('.panel').css('pointer-events', 'none');
		setTimeout(function(){
			$('.panel').css('pointer-events', 'auto');
		}, timing);
	});	
}

// ------------------------------------------------
// POST AND GET REQUEST TO GENERATE DATABASE
// ------------------------------------------------

export const postState = (cloudObj,timing,state) => {
	return function(){
		$('.footer').hide();
		const options = {
			method: 'POST',
			body: JSON.stringify(state),
			headers: {
				'Content-Type': 'application/json',
			},
		}
		fetch('/api', options)
		.then((resp) => {
			return resp.json();
		})
		.then(resp =>{
			console.log(resp.data);
			console.log(`/api2/${resp.data.data}`);
			return fetch(`/api2/${resp.data.data}`, { method: 'GET'} )
		})
		.then((response) => {
			return response.json();	
		})
		.then( (el) => {
			const myJson = el;	
			const userId = myJson.data[0].user_id;
			// console.log(`userID: ${userId}`);
			$('.btn__pdf--1').attr('href',`/pdf/${userId}`);
			loadLottie({
				'cloud--1-0': cloudObj.cloudMain,
				'cloud--2-0': cloudObj.cloud0,
				'cloud--2-1': cloudObj.cloud1,
				'cloud--2-2': cloudObj.cloud2,
				'cloud--2-3': cloudObj.cloud3,
			}, myJson, timing);
		})
	}
}


function loadLottie(obj, data, timing){
	const score0 = data.data[0].BroadcastScore+1;
	const score1 = data.data[0].ResponsiveScore+1;
	const score2 = data.data[0].RelationshipScore+1;
	const score3 = data.data[0].LifecycleScore+1;

	console.log(data);

	const scoremain = Math.round((score0+score1+score2+score3)/4);

	for(const key in obj){

		let tempVal;

		if(key === 'cloud--1-0'){
			tempVal = scoremain;
		}else if(key === 'cloud--2-0'){
			tempVal = score0;
		}if(key === 'cloud--2-1'){
			tempVal = score1;
		}if(key === 'cloud--2-2'){
			tempVal = score2;
		}if(key === 'cloud--2-3'){
			tempVal = score3;
		}

		updateresultsText(tempVal);

		obj[key]['op'] = tempVal;

		const lottieTemp = lottie.loadAnimation({
		  container: document.getElementById(key),
		  renderer: 'svg',
		  autoplay: false,
		  animationData: obj[key],
		  loop: false,
		});

		setTimeout(function(){
			lottieTemp.play(); 
		}, timing*2)
	}
}

function updateresultsText(score){
	let retThis;	
	if(score <= 24){
		retThis = 'Your score indicates your organization is focused around optimizing sales and marketing processes. Key characteristics of companies like yours include a hyper-focus on key business drivers including: attracting and nurturing prospects and activities around engaging and acquiring new customers.  Companies just like yours also tend focus on the development of a sales model and on sales enablement. As your sales model develops, marketing in turn maps its activities to the various stages defined by your sales cycle. For companies that score in this range, sales enablement and support are critical success factors followed closely by website scale and reach and a universal approach to demand generation.  See the following pages for our recommendations to advance your marketing to the next stage.'
	}else if(score > 24 && score <= 49){
		retThis = 'Your score indicates your marketing organization is transforming itself from being a lead discovery and generation machine into a strategic line of business. Key characteristics of companies like yours include a hyper-focus on key business drivers including: attracting and nurturing prospects and activities around engaging and acquiring new customers. This may translate into hyper-focus on the quality of its marketing outputs including: inquiries, suspects and prospects, leads, MQLs and opportunities, in an effort to optimize efficiencies and eliminate waste along the value building chain. In addition to sales enablement and management of demand generation activities, your marketing team might also be spending a considerable about of time examining and defining the sales cycle to ensure sales only works on activities that matter. And because of the hyper-focus on stages in the sales cycle, marketing typically takes an enhanced approach to demand generation, putting the customer at the center of its marketing strategy, supported by data, embedded account intelligence such as lead scoring and some level of segmentation and personalization. See the following pages for our recommendations to advance your marketing to the next stage.'
	}else if(score > 49 && score <= 74){
		retThis = 'Your score indicates your marketing organization is critical to delivering on your corporate strategy and goals. Key characteristics of companies like yours include a hyper-focus on key business drivers including: attracting and nurturing prospects and activities around engaging and acquiring new customers. Companies that have achieved this level of marketing excellence have shifted their focus to be completely data-driven, leveraging a full arsenal of tools to achieve marketing excellence across all relevant channels. Account signals and personalization, account based marketing, predictive lead scoring, artificial intelligence, real-time data, and testing and optimization - these enhanced approaches to marketing execution represent just a subset of what companies that score at this level are leveraging to not only manage the sales pipeline, but the entire customer experience. See the following pages for our recommendations to advance your marketing to the next stage.'
	}else{
		retThis = 'You’ve demonstrated that you’re among a top tier of marketers. By breaking down the organizational silos and connecting data and insights across business groups, you’re positioned to activate your customer intelligence in each of the micro-moments in which your customers engage. This, in turn, helps to ensure you’re able to deliver a truly connected customer experience and drive revenue growth in today’s experience economy. See below for a checklist and some curated assets to help you continue on this trajectory.'
	}
	
	$('.results__text--1').text(retThis);
}
