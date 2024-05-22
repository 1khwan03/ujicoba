import React from "react";

const HomeCom = () => {
  return (
    <div className="p-4 bg-[#f3e2cf] flex flex-col">
      <main className="container mx-auto px-4 py-8">
        <section className="bg-[#f3e2cf] py-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold mb-6">
                Welcome To Our Bakery Shop
              </h1>
              <p className="mb-8">
                The bakery is an establishment that produces food baked in an
                oven such as bread, cookies, cakes, pastries, and pies. Some
                retail bakeries are also categorized as cafes, serving coffee
                and tea to customers.
              </p>
              <button className="bg-[#201203] text-white py-2 px-4 rounded">
                ORDER NOW
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src="./src/assets/paper-bag-with-variety-bread 1.png"
                alt="Bakery items"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 text-center">About Us</h2>
            <p className="text-center mb-8 max-w-2xl">
              At Bakeryou, we take pride in our rich tradition of baking and our
              commitment to quality. Every morning, our skilled bakers craft a
              diverse selection of bread and pastries, ensuring that our
              customers always have a fresh and delicious experience. From our
              classic sourdough loaves to our decadent specialty cakes, each
              item is made with meticulous attention to detail and the finest
              ingredients available. Our goal is not just to sell bread, but to
              create moments of joy and satisfaction for our valued customers.
              Come and experience the warmth and aroma of our bakery – where
              every bite tells a story of craftsmanship and passion.
            </p>
            <button className="bg-[#201203] text-white py-2 px-4 rounded">
              See Our Products
            </button>
          </div>
        </section>
        <section className="bg-[#f3e2cf] py-16">
          <div className="container mx-auto grid md:grid-cols-2 gap-8">
            <img
              src="./src/assets/Milk Bread Croissants 1.png"
              alt="Bakery"
              className="rounded-lg"
            />
            <div>
              <h2 className="text-3xl font-bold mb-4">Bakeryou</h2>
              <p className="mb-4">
                Enjoy freshly baked bread, hot rolls, wholesome pastries, and
                delicious treats. Order delivery in a few steps and enjoy our
                in-house baked treats.
              </p>
              <h3 className="text-xl font-semibold">Opening Hours :</h3>
              <p>Monday - Friday: 09.00 - 16.00 WIB</p>
              <p>Saturday - Sunday: 10.00 - 19.00 WIB</p>
            </div>
          </div>
        </section>
        <section className="bg-[#f3e2cf] py-16">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-start">
            <div className="order-2 md:order-1 md:mr-8">
              <h2 className="text-3xl font-bold mb-6 text-center md:text-center">
                Contact Us
              </h2>
              <form className="bg-brown p-6 rounded-lg shadow-md space-y-4 md:text-left">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    placeholder="Input your name here"
                    className="mt-1 block bg-[#f3e2cf] w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    placeholder="Input your email here"
                    className="mt-1 block bg-[#f3e2cf] w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Message</label>
                  <textarea
                    placeholder="Input your message here"
                    className="mt-1 block bg-[#f3e2cf] w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50"
                    rows="4"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#201203] text-white py-2 rounded-md"
                >
                  SUBMIT
                </button>
              </form>
            </div>
            <div className="flex justify-center order-1 md:order-2 mb-8 md:mb-0">
              <img
                src="./src/assets/Bread Photography 2.png"
                alt="Bakery items"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeCom;
