---
layout: post
title: Neighborhood
excerpt: What is the impact of <span class="emphasis">the neighborhood</span>?
small_excerpt: the neighborhood?
---

<b>Chicago - A Multicultural City</b>
<p>As a multicultural city, <a href='https://www.chicago.gov/city/en/about.html'>Chicago</a> is well known for the diversity of its neighbourhood, and the harmony reigning among all its citizens. It is thus only natural that we investigate the relationship between the dominating ethnicity of each neighbourhood and the food establishments disseminated all throughout Chicago.</p>
<p>But are they uniformely disseminated over the whole city?
<br>
On the map below, the radius of the different bubbles is directly proportional to the amount of restaurants in that zipcode region, normalised by the areas of each zip. Most restaurants are concentrated in the city centre, near the coast. Coincidentally, this also corresponds to the neighbourhoods where the population is primarily white.</p>


<iframe src="{{ site.baseurl }}/map" style="width: 100%; height: 400px;"></iframe>

<b>Inspections and Restaurants - Fair Distribution or Bias?</b>
<p>
	It is not surprising to find a majority of the restaurants located in white neighbourhoods, as most of Chicago is dominated by a mostly white population. 37 parts of Chicago are primarily white, 19 are mostly black and african american while 11 are principally latino or hispanic. The amount of inspections each establishments benefit from is also fairly equal accross the neighbourhoods dominated by different ethnicities.
</p>
<p>
	However, if we look into the google reviews and into the number of food establishments that has not been inspected against the total amount of restaurants per neighbourhoods, we can observe that this ratio is larger in white neighbourhoods than in coloured neighbourhoods. This either means that restaurants located in white neighbourhoods that have not been inspected are most likely to be found on google reviews than restaurants located in other areas. Or this means that restaurants in Black and African American or Hispanic or Latino neighbourhoods are most likely to be inspected.
	<iframe src="{{ site.baseurl }}/plots/ratioEthnicity.html" style="width: 100%; height: 400px;"></iframe>

</p>
<p>
	Nonetheless, even if it was the case that you have a larger chance of being controlled when not based in a predominantly white neighbourhood, your odds of success are not impacted. Indeed, the chances of passing, failing or going out of business do not change much with the predominant ethnicity of your vicinity.
	<iframe src="{{ site.baseurl }}/plots/passFailOob.html" style="width: 100%; height: 400px;"></iframe>
</p>

<b>Settling in Coloured Neighbourhoods</b>
<p>
	From the data we have collected so far, it seems like moving to a neighbourhood that is not primarily white will either increase your chances of being inspected or lower your chances of being found on google reviews. 
	<br><i>
	So why should you settle into those areas? </i>
	<br>
	Easy answer!<br>
	The area one must explore before making sure one can find a restaurant varies among the different neighbourhoods. Statistically, with similarly interesting business, one based in a sparse neighbourhood in terms of food establishments will attract more clients than one located in a foodie area.
	<iframe src="{{ site.baseurl }}/plots/areaRestaurants.html" style="width: 100%; height: 400px;"></iframe>
</p>
<p>
	This might not be true in the case where a sparse area in terms of restaurants is also sparse in terms of inhabitants. However, this is not the case in Chicago. Food businesses located in Black and African American neighbourhoods might have on average more clients than if they were based in another neighbourhood.
	<iframe src="{{ site.baseurl }}/plots/habPerResto.html" style="width: 100%; height: 400px;"></iframe>
</p>
