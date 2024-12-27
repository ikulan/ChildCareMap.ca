# ChildCareMap.ca

This project aims to create a convenient and modern website where users can easily search for and explore child care service information in BC. The data source comes from the [BC government's open data set](#data-source).

Website: www.childcaremap.ca

I am actively working on adding more features to the website, such as search functionality for addresses and city names, completing the backend, and setting up  the continuous deployment pipeline. 💪 Stay tuned for exciting updates!

### Top 20 Cities with the Most Daycare Facilities
(Last Updated: 2024-11-26)

| City          | Number of Licensed Daycares |
| ------------- | ------------- |
| [Surrey](dataset/20241126/surrey.geojson) | 575 |
| [Vancouver](dataset/20241126/vancouver.geojson) | 520 |
| [Victoria](dataset/20241126/victoria.geojson) | 327 |
| [Richmond](dataset/20241126/richmond.geojson) | 310 |
| [North Vancouver](dataset/20241126/north_vancouver.geojson) | 288 |
| [Burnaby](dataset/20241126/burnaby.geojson) | 278 |
| [Coquitlam](dataset/20241126/coquitlam.geojson) | 196 |
| [Langley](dataset/20241126/langley.geojson) | 162 |
| [Abbotsford](dataset/20241126/abbotsford.geojson) | 162 |
| [Nanaimo](dataset/20241126/nanaimo.geojson) | 156 |
| [Chilliwack](dataset/20241126/chilliwack.geojson) | 151 |
| [Prince George](dataset/20241126/prince_george.geojson) | 150 |
| [Kelowna](dataset/20241126/kelowna.geojson) | 146 |
| [Maple Ridge](dataset/20241126/maple_ridge.geojson) | 140 |
| [Kamloops](dataset/20241126/kamloops.geojson) | 125 |
| [Delta](dataset/20241126/delta.geojson) | 114 |
| [Port Coquitlam](dataset/20241126/port_coquitlam.geojson) | 101 |
| [New Westminster](dataset/20241126/new_westminster.geojson) | 101 |
| [West Vancouver](dataset/20241126/west_vancouver.geojson) | 73 |
| [Vernon](dataset/20241126/vernon.geojson) | 53 |


### Data Source:

- Canada.ca > Open Gevernment > [Child Care Map Data](https://open.canada.ca/data/en/dataset/4cc207cc-ff03-44f8-8c5f-415af5224646)

- British Columbia - Data Catalogue > [Child Care Map Data](https://catalogue.data.gov.bc.ca/dataset/child-care-map-data/resource/9a9f14e1-03ea-4a11-936a-6e77b15eeb39)


---

## Tech Stack

- **Front-end:** The front-end of the web application is built with TypeScript, React, TailwindCSS, and Mapbox as the Map API.
  - [View the Front-end Codebase](/frontend/README.md)

- **Back-end:** TBD

- **CI/CD:** I have integrated **GitHub Actions** with **AWS** to automate production deployments. When a release tag is created, a GitHub Actions workflow is triggered to build the front-end app, upload it to the AWS S3 bucket, and invalidate the CloudFront distribution.

- **Hosting:** All services are currently hosted on AWS:
  - **CDN:** CloudFront
  - **Website Hosting:** S3
  - **DNS:** Route 53

![Illustration of AWS static website hosting using S3 and CloudFront](/misc/aws_static_website_hosting_s3_cloudfront.webp)


## Branching Model

### Development

- **Feature Branch:** Represents a feature under development. Create a feature branch when working on a new feature. Name the feature branch using the story type and story ID from Shortcut in the following format: `[story_type]/[story_id]/[story_name]` (e.g., `feature/sc-123/my-story-name`).

- **Main Branch:** Used as the integration branch for completed features. Open a pull request to merge the feature branch into the `main` branch.

### Release

- When ready to release, create and publish a release from `main` branch. This action triggers an automatic deployment to production. Use the following naming format for version tags: `frontend-v[major].[minor].[patch]`

## TODO

- **Front-end**
  - Implement data filtering functionality.
  - Add new features, such as:
    - Links to inspection reports.
    - Select and print out custom childcare lists.

- **Back-end**
  - Develop a backend service to handle location data queries and replace the current static GeoJSON files.

- **Other Improvements**
  - Add test automations for better coverage and reliability.
  - Optimize code and enhance performance.
  - Integrate logging and metrics for monitoring and analysis.
  - SEO


