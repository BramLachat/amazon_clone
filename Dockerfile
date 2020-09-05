# pull official base image
FROM node:12.18.3

# set working directory
WORKDIR /amazon

# copy current directory to current working directory (/amazon)
COPY . ./

# RUN gets executed once at build time
RUN npm install

#default port opened by React when npm start is executed
EXPOSE 3000

#CMD lets you define a default command to run when your container starts
CMD ["npm", "start"]