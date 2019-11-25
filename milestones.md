# Next steps

### Answering questions based almost exclusively on the Chicago dataset
#### Question 1 - How fair are inspections?

Which type of restaurants is being controlled the most? And which type of restaurant tend to pass the test the most?
- we have already reduced the number of facility types from 400+ to 43
- now, we simply need to count for the most common facility type, and for the second question, simply calculate the ratios of pass/fail for each facility type

Do the inspection patterns change for large chain restaurants [from Starbucks and McDonald's] compared to smaller independent ones?
- we have extracted the big chains from the dataset
- compare ratios of pass/fail/out-of-business/pass-with-conditions/not-yet-ready for the same facility type in similar locations (and possibly their google reviews evaluations as well)
   
#### Question 2 - How much do violations correlate with external events?
    
How are violations/failed inspections sensitive to permanent external factors such as neighborhood, type of establishments?
- we have already mapped 99+% of all entries in the dataset
- then, we will compute the ratios of pass/fail/out-of-business/pass-with-conditions/not-yet-ready for business in the same location and/or business type groups

How do violations/failed inspections correlate with temporary factors such as season, and time of the year? That is, for a given area, are violations more or less regular, or are they susceptible to external factors, such as temperature?
- we already have the time of the year the inspection was done (possibly, we may integrate a dataset for temperatures, which would be trivial, if it provides a worthy insight)
- we just need to create a model and see whether time of year information allows for a greater accuracy when predicting pass/fail/out-of-business/pass-with-conditions/not-yet-ready (that is, whether time of year carries any extra information to a business performance in the inspection)

### Answering deeper questions
#### Question 3 - Do violations and inspections reflect deeper biases?

Is there any correlation between the number of violations and inspections with the (perceived) ethnicity of each neighborhood of Chicago?
- we have extracted (and plotted) ethnicities in Chicago on top of the results of the inspections
- we will try different approaches to answer this question
	- grouping by ethnicity majorities and computing odds of pass/fail/out-of-business/pass-with-conditions/not-yet-ready
	- create a prediction model using the several ethnicities presence percentage and evaluate whether it improves performance - and if so, what weights are assigned to which ethnicity (are there implicit biases?)

Is there a relationship between the inspections and restaurants' popularity on Google Local Review?
- we have already processed the Google Local Review dataset, and a naïve joint of both dataset already revealed more than 3500 common restaurants, and it's trivial to obtain the star rating of each 
- we will investigate the impact of the average review score on the possible outcomes of an inspection (pass/fail/out-of-business/pass-with-conditions/not-yet-ready)

## Sprints

1. **Sprint 1 (ends 02/12):** 
   - Finish answering question 1

2. **Sprint 2 (ends 09/12):**
   - Finish answering question 2
   
3. **Sprint 3 (ends 16/12):**
   - Continue answering question 3

4. **Sprint 4 (ends 20/12):**
   - Finish answering question 3 (cont.)
   - Finish writing the data story
