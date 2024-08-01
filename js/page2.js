document.addEventListener("DOMContentLoaded", () => {
  //Navigate to the HomePage
  const logo = document.querySelector(".logo");
  logo.addEventListener("click", () => {
    location.href = "./index.html";
  });

  //Select
  const typeDropdownBtn = document.querySelector(".typeDropdownBtn");
  const typeDropdownContent = document.querySelector(".typeDropdownContent");
  const typeSelectText = document.querySelector(".typeSelectText");

  const distanceDropdownBtn = document.querySelector(".distanceDropdownBtn");
  const distanceDropdownContent = document.querySelector(
    ".distanceDropdownContent"
  );
  const distanceSelectText = document.querySelector(".distanceSelectText");

  const categoryDropdownBtn = document.querySelector(".categoryDropdownBtn");
  const categoryDropdownContent = document.querySelector(
    ".categoryDropdownContent"
  );
  const categorySelectText = document.querySelector(".categorySelectText");

  typeDropdownBtn.addEventListener("click", () => {
    showSelect(typeDropdownContent, typeSelectText, anyTypeSelect);
  });

  distanceDropdownBtn.addEventListener("click", () => {
    showSelect(distanceDropdownContent, distanceSelectText, distanceSelect);
  });

  categoryDropdownBtn.addEventListener("click", () => {
    showSelect(categoryDropdownContent, categorySelectText, categorySelect);
  });

  function showSelect(element1, element2, callback) {
    element1.classList.toggle("show");

    Array.from(element1.children).forEach((li) => {
      li.addEventListener("click", () => {
        element1.classList.remove("show");
        element2.textContent = li.textContent;
        callback();
      });
    });
  }

  //Mock Data
  const eventsStore = [
    {
      title: "INFJ Personality Type - Coffee Shop Meet & Greet",
      description: "Being an INFJ",
      date: new Date(2024, 2, 23, 15),
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w",
      type: "offline",
      attendees: 99,
      category: "Hobbies and Passions",
      distance: 50,
    },
    {
      title:
        "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
      description: "New York AI Users",
      date: new Date(2024, 2, 23, 11, 30),
      image:
        "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "offline",
      attendees: 43,
      // spots: 2,
      category: "Technology",
      distance: 25,
    },
    {
      title: "Book 40+ Appointments Per Month Using AI and Automation",
      description: "New Jersey Business Network",
      date: new Date(2024, 2, 16, 14),
      image:
        "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      category: "Technology",
      distance: 10,
    },
    {
      title: "Dump writing group weekly meetup",
      description: "Dump writing group",
      date: new Date(2024, 2, 13, 11),
      image:
        "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 77,
      category: "Business",
      distance: 100,
    },
    {
      title:
        "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
      description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
      date: new Date(2024, 2, 14, 11),
      image:
        "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "online",
      attendees: 140,
      category: "Social Activities",
      distance: 74,
    },
    {
      title: "All Nations - Manhattan Missions Church Bible Study",
      description: "Manhattan Bible Study Meetup Group",
      date: new Date(2024, 2, 14, 11),
      image:
        "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      type: "offline",
      category: "Health and Wellbeing",
      distance: 50,
    },
  ];

  const eventNearNYCardsContainer = document.querySelector(
    ".eventNearNYCardsContainer"
  );

  //FormatData
  function formatData(data) {
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZone: "UTC",
      timeZoneName: "short",
    }).format(data);
  }

  //createOnlineLabel for image
  function createOnlineLabel(event, element) {
    if (event.type === "online") {
      const online = document.createElement("div");
      online.classList.add("online");
      element.append(online);

      const imgOnline = document.createElement("img");
      imgOnline.src = "assets/icons/camera.svg";
      imgOnline.alt = "camera";
      imgOnline.classList.add("camera");
      online.append(imgOnline);

      const p = document.createElement("p");
      p.textContent = "Online Event";
      online.append(p);
    }
  }

  //render km
  function renderDistanceOfflineEvent(event, element) {
    if (event.type === "offline") {
      const eventDistance = document.createElement("p");
      eventDistance.classList.add("eventDistance");
      eventDistance.textContent = `(${event.distance} km)`;
      element.append(eventDistance);
    }
  }

  //render online
  function renderOnline(event, element) {
    if (event.type === "online") {
      const onlineEventNY = document.createElement("div");
      onlineEventNY.classList.add("onlineEventNY");
      element.append(onlineEventNY);

      const imgOnlineNY = document.createElement("img");
      imgOnlineNY.src = "assets/icons/camera.svg";
      imgOnlineNY.alt = "camera";
      imgOnlineNY.classList.add("camera");
      onlineEventNY.append(imgOnlineNY);

      const pNY = document.createElement("p");
      pNY.textContent = "Online Event";
      onlineEventNY.append(pNY);
    }
  }

  //render
  function attendesAndSpots(event, element) {
    if ("attendees" in event) {
      const attendeesEventNearNY = document.createElement("div");
      attendeesEventNearNY.classList.add("attendeesEventNearNY");
      element.append(attendeesEventNearNY);

      const eventMemebers = document.createElement("p");
      eventMemebers.classList.add("eventMemebers");
      eventMemebers.textContent = `${event.attendees} attendees`;
      attendeesEventNearNY.append(eventMemebers);

      if ("spots" in event) {
        const remainingSpots = document.createElement("p");
        remainingSpots.classList.add("remainingSpots");
        remainingSpots.textContent = `${event.spots} spots left`;
        attendeesEventNearNY.append(remainingSpots);
      }
    }
  }

  //create cardText
  function createCardText(event, element) {
    const cardNearNYContent = document.createElement("div");
    cardNearNYContent.classList.add("cardNearNYContent");
    element.append(cardNearNYContent);

    const basicEvntNearNYInformation = document.createElement("div");
    basicEvntNearNYInformation.classList.add("basicEvntNearNYInformation");
    cardNearNYContent.append(basicEvntNearNYInformation);

    const eventTimeNY = document.createElement("p");
    eventTimeNY.classList.add("eventTimeNY");
    eventTimeNY.textContent = formatData(event.date);
    basicEvntNearNYInformation.append(eventTimeNY);

    const eventNYHeader = document.createElement("h3");
    eventNYHeader.classList.add("eventNYHeader");
    basicEvntNearNYInformation.append(eventNYHeader);

    eventNYHeader.textContent = event.title;

    // if (window.innerWidth <= 768) {
    //   eventNYHeader.textContent = event.description;
    // } else {
    //   eventNYHeader.textContent = event.title;
    // }

    const categoryAndDistanceContainer = document.createElement("div");
    categoryAndDistanceContainer.classList.add("categoryAndDistanceContainer");
    basicEvntNearNYInformation.append(categoryAndDistanceContainer);

    const eventCategorie = document.createElement("p");
    eventCategorie.classList.add("eventCategorie");
    eventCategorie.textContent = event.category;
    categoryAndDistanceContainer.append(eventCategorie);

    renderDistanceOfflineEvent(event, categoryAndDistanceContainer);

    renderOnline(event, basicEvntNearNYInformation);

    attendesAndSpots(event, cardNearNYContent);
  }

  //create Image
  function createImage(event, element) {
    const img = document.createElement("img");
    img.src = event.image;
    img.alt = "event";
    img.classList.add("event");
    element.append(img);
  }

  //create Card
  function createCard(event, element) {
    const eventNearNYCard = document.createElement("div");
    eventNearNYCard.classList.add("eventNearNYCard");
    element.append(eventNearNYCard);
    createImage(event, eventNearNYCard);

    createOnlineLabel(event, eventNearNYCard);

    createCardText(event, eventNearNYCard);
  }

  //EventCards
  function updateEventCards(obj) {
    eventNearNYCardsContainer.textContent = "";
    obj.forEach((event) => {
      createCard(event, eventNearNYCardsContainer);
    });
  }

  //filter
  function superFilter() {
    return eventsStore.filter((event) => {
      const typeMatch =
        typeSelectText.textContent === "Any type" ||
        event.type === typeSelectText.textContent;
      const distanceMatch =
        distanceSelectText.textContent === "Any distance" ||
        (event.type === "offline" &&
          event.distance === parseInt(distanceSelectText.textContent));
      const categoryMatch =
        categorySelectText.textContent === "Any category" ||
        event.category === categorySelectText.textContent;

      return typeMatch && distanceMatch && categoryMatch;
    });
  }

  function anyTypeSelect() {
    updateEventCards(superFilter());
  }

  function distanceSelect() {
    updateEventCards(superFilter());
  }

  function categorySelect() {
    updateEventCards(superFilter());
  }

  updateEventCards(eventsStore);
  // window.addEventListener("resize", updateEventCards);
});
